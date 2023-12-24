"use client";

import { db, rtdb } from "@/app/api/firebase";
import { Button } from "@/app/components/ui/button";
import { getRandomUser } from "@/lib/randomUser";
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { push, ref } from "firebase/database";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";

const ydoc = new Y.Doc();
const collaboration = false;

interface Props {
  params: { repoid: string };
}
export default function Editor({ params }: Props) {
  const provider = collaboration
    ? new WebsocketProvider("ws://localhost:8080", params.repoid, ydoc)
    : new IndexeddbPersistence(params.repoid, ydoc);

  const postListRef = ref(rtdb, params.repoid);

  const editor: BlockNoteEditor | null = useBlockNote({
    collaboration: {
      provider,
      fragment: ydoc.getXmlFragment("document-store"),
      user: getRandomUser(),
    },
  });

  return (
    <div>
      <Button
        onClick={async () => {
          const docRef = doc(db, "repos", params.repoid);
          getDoc(docRef).then((latestdoc) => {
            const data = latestdoc.data();

            if (data) {
              console.log(data.state);
              const u8a = new Uint8Array(
                atob(data.state)
                  .split("")
                  .map((char) => char.charCodeAt(0))
              );
              Y.applyUpdate(ydoc, u8a);
            }
          });
        }}
      >
        Pull
      </Button>
      <Button
        onClick={async () => {
          const stateVec = Y.encodeStateAsUpdate(ydoc);
          const state = btoa(String.fromCharCode.apply(null, Array.from(stateVec)));
          const date = new Date();
          await push(postListRef, {
            status: "review",
            stateVec: state,
            comment: "",
            createdAt: date.getTime(),
          });
        }}
      >
        Send Letter
      </Button>

      <Button
        onClick={async () => {
          const stateVec = Y.encodeStateAsUpdate(ydoc);
          const state = btoa(String.fromCharCode.apply(null, Array.from(stateVec)));
          const date = new Date();
          await setDoc(doc(db, "repos", params.repoid), {
            state: state,
            timestamp: date.getTime(),
          });
        }}
      >
        Push
      </Button>
      <BlockNoteView editor={editor} />
    </div>
  );
}
