'use client'

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { getRandomUser } from "@/lib/randomUser";
import * as Y from "yjs";
import { Button } from "@/app/components/ui/button";
import { rtdb } from "@/app/api/firebase";
import { ref, push, get, limitToLast, query } from "firebase/database"
import { db } from "@/app/api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { IndexeddbPersistence } from "y-indexeddb";
import parseXml from "./BlockParser"

interface Props {
    params: { repoid: string, letterid: string }
}

export default function Viewer({ params }: Props) {
    const ydoc = new Y.Doc();
    const docRef = doc(db, "repos", params.repoid);

    const xml = '<blockgroup><blockcontainer backgroundColor="default" id="38fa8350-5a5f-40be-a2d5-880eee8ae782" textColor="default"><heading level="1" textAlignment="left">First Header</heading><blockgroup><blockcontainer backgroundColor="default" id="cc200ef1-e073-4264-899f-7268e22a70a1" textColor="default"><paragraph textAlignment="left">Nested </paragraph></blockcontainer><blockcontainer backgroundColor="default" id="865c6b4b-bba3-40e7-b494-3dce6585830f" textColor="default"><bulletlistitem textAlignment="left">List1</bulletlistitem></blockcontainer><blockcontainer backgroundColor="default" id="91f0c9e2-bab1-4b3e-a327-704033162180" textColor="default"><bulletlistitem textAlignment="left">List2</bulletlistitem><blockgroup><blockcontainer backgroundColor="default" id="8ac94350-7400-4dbd-86db-6d1db4cb0268" textColor="default"><bulletlistitem textAlignment="left">Nested List1</bulletlistitem></blockcontainer></blockgroup></blockcontainer></blockgroup></blockcontainer><blockcontainer backgroundColor="default" id="c86b4a78-bceb-46ef-9ec1-f5a1798fa17c" textColor="default"><heading level="2" textAlignment="left">Second Header</heading><blockgroup><blockcontainer backgroundColor="default" id="ccf0a629-c268-4194-9260-93ff992d2d89" textColor="default"><heading level="2" textAlignment="left">Second Header tab </heading></blockcontainer></blockgroup></blockcontainer><blockcontainer backgroundColor="default" id="5157ac4f-4295-43f7-b9eb-92a02a02ed1f" textColor="default"><paragraph textAlignment="left"></paragraph></blockcontainer></blockgroup>'
    const parsedString = parseXml(xml)

    useEffect(() => {
        getDoc(docRef).then((latestdoc) => {
            const data = latestdoc.data()

            if (data) {
                console.log(data.state)
                const u8a = new Uint8Array(atob(data.state).split('').map(char => char.charCodeAt(0)));
                Y.applyUpdate(ydoc, u8a)
            }

        })
        const letterRef = ref(rtdb, `${params.repoid}/${params.letterid}`);
        get(query(letterRef)).then((snapshot) => {
            const latestPost = snapshot.val();

            if (!latestPost) {
                console.log(`Letter ID ${params.letterid} was not found`)
            } else {
                const data = latestPost.stateVec
                console.log(data)
                const u8a = new Uint8Array(atob(data).split('').map(char => char.charCodeAt(0)));

                Y.applyUpdate(ydoc, u8a)
            }
        });
    }, [params.letterid])

    const editor: BlockNoteEditor | null = useBlockNote({
        editable: false,
        initialContent: parsedString
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