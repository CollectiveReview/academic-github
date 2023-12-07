'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";
import { Button } from "@/app/components/ui/button";
import { IndexeddbPersistence } from 'y-indexeddb'
import { rtdb } from "@/app/api/firebase";
import { ref, push, get, limitToLast, query } from "firebase/database"

const ydoc = new Y.Doc();

interface Props {
    params: { letterid: string }
}
export default function Viewer({ params }: Props) {
    const provider = new IndexeddbPersistence(params.letterid, ydoc);

    const postListRef = ref(rtdb, params.letterid);

    const editor: BlockNoteEditor | null = useBlockNote({
        collaboration: {
            provider,
            fragment: ydoc.getXmlFragment("document-store"),
            user: getRandomUser(),
        },
        editable: false
    });

    return (
        <div>
            <Button onClick={async () => {

            }}>Accept</Button>
            <Button onClick={async () => {

            }}>Reject</Button>
            <BlockNoteView editor={editor} />
        </div>
    )
}