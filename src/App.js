// App.js
import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Body from './components/Body';
import RepoList from './components/RepoList';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 中央揃
    margin: '0 auto', // 横方向に中央揃え
    padding: theme.spacing(3), // 内部の余白
    backgroundImage: 'linear-gradient(150deg, rgba(247, 166, 12, 0.5) 20%, rgba(255, 34, 87, 0.5) 60%, rgba(154, 39, 238, 0.5) 80%, rgba(35, 102, 247, 0.5))'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 中央揃え
    maxWidth: '800px', // 最大幅を800pxに設定
    margin: '0 auto', // 横方向に中央揃え
    padding: theme.spacing(3), // 内部の余白
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  }
}));

function App() {
  const classes = useStyles();

  // const [isConnected, setIsConnected] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null); // 選択されたドキュメント情報を保持

  // const handleConnectClick = () => {
  //   setIsConnected(!isConnected);
  // };

  // ドキュメントが選択された際に呼ばれる関数
  const handleDocumentSelect = (documentInfo) => {
    setSelectedDocument(documentInfo);
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={12}>
        <Grid item xs={2}>
          <Grid container spacing={0}>
            <RepoList onDocumentSelect={handleDocumentSelect} />
            <Button>CreateNewRepo</Button>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          {selectedDocument ? (
            <Body selectedDocument={selectedDocument} />
          ) : (
            null
          )}
        </Grid>
      </Grid>

      {/* <button onClick={handleConnectClick}>
        {isConnected ? 'Disconnect' : 'Connect'}
      </button> */}
    </div>
  );
}

export default App;
