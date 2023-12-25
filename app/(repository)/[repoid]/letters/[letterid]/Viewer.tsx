'use client'

import "@blocknote/core/style.css";
import * as Y from "yjs";
import { Button } from "@/app/components/ui/button";
import { db } from "@/app/api/firebase";
import { doc } from "firebase/firestore";

interface Props {
    params: { repoid: string, letterid: string }
}

export default function Viewer({ params }: Props) {
    const ydoc = new Y.Doc();
    const docRef = doc(db, "repos", params.repoid);


    return (
        <div>
            <Button onClick={async () => {

            }}>Accept</Button>
            <Button onClick={async () => {

            }}>Reject</Button>
        </div>
    )
}