// Body.js
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Body({ selectedDocument }) {
    const [documentContent, setDocumentContent] = useState('');

    useEffect(() => {
        // 選択されたドキュメントが変更されたらAPIを呼び出して内容を取得
        if (selectedDocument) {
            const content = `this is the document${selectedDocument.id}`
            setDocumentContent(content)
        }
    }, [selectedDocument]);

    return (
        <div>
            <Typography variant='h3'>{selectedDocument.title}</Typography>
            <p>{documentContent}</p>
        </div>
    );
}

export default Body;
