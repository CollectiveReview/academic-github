// RepoList.js
import React from 'react';
import { Box, Typography, List, ListItemText, ListItemButton } from '@mui/material';


const documents = [
    { id: 1, name: 'Document 1', title: 'The greatest document in the world' },
    { id: 2, name: 'Document 2', title: 'The best document in the world' },
    { id: 3, name: 'Document 3', title: 'A tiny but significant document ' },
    // 他のドキュメントを追加
];

function RepoList({ onDocumentSelect }) {
    const handleDocumentClick = (document) => {
        // ドキュメントが選択されたら、その情報を親コンポーネントに渡す
        onDocumentSelect(document);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Repository List
            </Typography>
            <List>
                {documents.map((document) => (
                    <ListItemButton key={document.id} onClick={() => handleDocumentClick(document)}>
                        <ListItemText primary={document.name} />
                    </ListItemButton>
                ))}
            </List>
        </Box>

    );
}

export default RepoList;
