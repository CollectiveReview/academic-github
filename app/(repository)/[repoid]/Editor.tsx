'use client'

import { collection, doc, limitToLast, setDoc } from "firebase/firestore";
import { query, where, getDoc } from "firebase/firestore";

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { IndexeddbPersistence } from 'y-indexeddb'
import { db } from "@/app/api/firebase";

const ydoc = new Y.Doc();
const { WebsocketProvider } = require("y-websocket");
const collaboration = false
interface Props {
    params: { repoid: string }
}
export default function Editor({ params }: Props) {
    const provider = collaboration ?
        new WebsocketProvider("ws://localhost:8080", params.repoid, ydoc) :
        new IndexeddbPersistence(params.repoid, ydoc);
    const [cloned, Setcloned] = useState(false);

    const editor: BlockNoteEditor | null = useBlockNote({
        collaboration: {
            provider,
            fragment: ydoc.getXmlFragment("document-store"),
            user: getRandomUser(),
        },
    });

    return (
        <div>
            <Button onClick={async () => {
                const docRef = doc(db, "repos", "test_repo");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data()
                    const u8a = new Uint8Array(atob(data.state).split('').map(char => char.charCodeAt(0)));
                    Y.applyUpdate(ydoc, u8a)
                } else {
                    console.log("No such document!");
                }
            }}>Pull</Button>
            <Button onClick={async () => {
                const state = Y.encodeStateAsUpdate(ydoc)
                const base64String = btoa(String.fromCharCode.apply(null, Array.from(state)));
                const repoRef = collection(db, "repos");
                const docRef = await setDoc(doc(repoRef, "test_repo"), {
                    state: base64String
                })
                console.log(docRef)
            }}>Send Letter</Button>
            <BlockNoteView editor={editor} />
        </div>
    )
}