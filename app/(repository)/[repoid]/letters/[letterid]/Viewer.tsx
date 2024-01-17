'use client'

import { Button } from "@/app/components/ui/button";
import "@blocknote/core/style.css";
import * as Y from "yjs";

interface Props {
    params: { repoid: string, letterid: string }
}

export default function Viewer({ params }: Props) {
    const ydoc = new Y.Doc();


    return (
        <div>
            <Button onClick={async () => {

            }}>Accept</Button>
            <Button onClick={async () => {

            }}>Reject</Button>
        </div>
    )
}