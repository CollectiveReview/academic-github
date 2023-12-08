'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";
import { Button } from "@/app/components/ui/button";
import { IndexeddbPersistence } from 'y-indexeddb'
// import { rtdb } from "@/app/api/firebase";
// import { ref, push, get, limitToLast, query } from "firebase/database"
import { db } from "@/app/api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

const ydoc = new Y.Doc();

interface Props {
    params: { repoid: string, letterid: string }
}
export default function Viewer({ params }: Props) {
    const provider = new IndexeddbPersistence(params.letterid, ydoc);
    const docRef = doc(db, "repos", params.repoid);

    useEffect(() => {
        getDoc(docRef).then((latestdoc) => {
            const data = latestdoc.data()
            if (data) {
                const u8a = new Uint8Array(atob(data.state).split('').map(char => char.charCodeAt(0)));
                Y.applyUpdate(ydoc, u8a)
                console.log(u8a)
            }
        })
    }, [params.repoid])



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