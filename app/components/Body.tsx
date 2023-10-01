// Body.js
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextTiptapEditor from "./NextTiptapEditor";

function Body({ selectedDocument }: { selectedDocument: any }) {
  const [documentContent, setDocumentContent] = useState("");

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
      <p>{documentContent}</p>
      <NextTiptapEditor roomName={selectedDocument.roomName} />
    </div>
  );
}

export default Body;
