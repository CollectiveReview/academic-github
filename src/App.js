// App.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Body from './components/Body';
import RepoList from './components/RepoList';
import Home from './components/NextTiptapEditor';

// import ProseMirrorEditor from './components/ProseMirrorEditor';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null); // 選択されたドキュメント情報を保持

  const handleConnectClick = () => {
    // Implement the connection logic here
    setIsConnected(!isConnected);
  };

  // ドキュメントが選択された際に呼ばれる関数
  const handleDocumentSelect = (documentInfo) => {
    setSelectedDocument(documentInfo);
  };

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={2}>
          <Grid container spacing={0}>
            <RepoList onDocumentSelect={handleDocumentSelect} />
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Body selectedDocument={selectedDocument} />
          <Home />
        </Grid>
      </Grid>
      <button onClick={handleConnectClick}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
}

export default App;
