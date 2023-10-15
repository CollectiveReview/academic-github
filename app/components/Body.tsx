// Body.js
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextTiptapEditor from "./NextTiptapEditor";
import { userFirebaseAuthContext } from '@/lib/firebase/utils/auth'

function Body({ selectedDocument }: { selectedDocument: any }) {
    const auth = userFirebaseAuthContext()

    const [documentContent, setDocumentContent] = useState("");
    const currentUserUid = auth.currentUser?.uid


    useEffect(() => {
        // 選択されたドキュメントが変更されたらAPIを呼び出して内容を取得
        if (selectedDocument) {
            const content = `this is the document${selectedDocument.id}`;
            setDocumentContent(content);
        }
    }, [selectedDocument]);


    return (
        <div>

            <Typography variant="h3">{selectedDocument.title}</Typography>
            <NextTiptapEditor roomName={selectedDocument.roomName} />
        </div>
    );
}

export default Body;
