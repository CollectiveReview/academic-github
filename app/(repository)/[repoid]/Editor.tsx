'use client'

import { getRandomUser } from "@/lib/randomUser";
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { getAuth } from "firebase/auth";
import { IndexeddbPersistence } from 'y-indexeddb';
import { WebsocketProvider } from 'y-websocket';
import * as Y from "yjs";

const ydoc = new Y.Doc();
const collaboration = true

interface Props {
    params: { repoid: string }
}
export default function Editor({ params }: Props) {
    const auth = getAuth();
    const user = auth.currentUser;

    const provider = collaboration ?
        new WebsocketProvider("wss://io.gnt.place", params.repoid, ydoc) :
        new IndexeddbPersistence(params.repoid, ydoc);

    const editor: BlockNoteEditor | null = useBlockNote({
        collaboration: {
            provider,
            fragment: ydoc.getXmlFragment("document-store"),
            user: user ? { name: user.displayName!, color: "#FAF594" } : getRandomUser(),
        },
    });

    return (
        <div>
            <BlockNoteView editor={editor} />
        </div>
    )
}