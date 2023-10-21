// Body.js
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextTiptapEditor from "./NextTiptapEditor";
import { UserAuth } from '../api/AuthContext';
import RepositoryActionBar from "./RepositoryActionBar";

function Body({ selectedDocument }: { selectedDocument: any }) {
    const { user, logOut } = UserAuth();

    const [documentContent, setDocumentContent] = useState("");
    useEffect(() => {
        // 選択されたドキュメントが変更されたらAPIを呼び出して内容を取得
        if (selectedDocument) {
            const content = ``;
            setDocumentContent(content);
        }
    }, [selectedDocument]);
    const cloneRepo = () => {
        alert("push!")
    }

    return (
        <div>

            <Typography variant="h3">{selectedDocument.title}</Typography>
            <NextTiptapEditor roomName={selectedDocument.roomName} />

        </div>
    );
}

export default Body;
