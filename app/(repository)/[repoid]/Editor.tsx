'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";
import { IndexeddbPersistence } from 'y-indexeddb'

const ydoc = new Y.Doc();
const { WebsocketProvider } = require("y-websocket");
const collaboration = true

interface Props {
    params: { repoid: string }
}
export default function Editor({ params }: Props) {
    const provider = collaboration ?
        new WebsocketProvider("wss://io.gnt.place", "", ydoc) :
        new IndexeddbPersistence(params.repoid, ydoc);

    const editor: BlockNoteEditor | null = useBlockNote({
        collaboration: {
            provider,
            fragment: ydoc.getXmlFragment("document-store"),
            user: getRandomUser(),
        },
    });

    return (
        <div>
            <BlockNoteView editor={editor} />
        </div>
    )
}