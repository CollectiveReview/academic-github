'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";

const doc = new Y.Doc();

interface Props {
    params: { repoid: string }
}
export default function Editor({ params }: Props) {
    const { WebsocketProvider } = require("y-websocket");
    const provider = new WebsocketProvider("ws://localhost:8080", params.repoid, doc);

    const editor: BlockNoteEditor | null = useBlockNote({
        collaboration: {
            provider,
            fragment: doc.getXmlFragment("document-store"),
            user: getRandomUser(),
        },
    });

    return (
        <div>
            <p>{params.repoid}</p>
            <BlockNoteView editor={editor} />
        </div>
    )
}