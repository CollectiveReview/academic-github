// App.js
import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Body from "./components/Body";
import RepoList from "./components/RepoList";
import axios from "axios";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // 中央揃
    margin: "0 auto", // 横方向に中央揃え
    padding: theme.spacing(3), // 内部の余白
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // 中央揃え
    maxWidth: "800px", // 最大幅を800pxに設定
    margin: "0 auto", // 横方向に中央揃え
    padding: theme.spacing(3), // 内部の余白
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

function App() {
  const classes = useStyles();

  // const [isConnected, setIsConnected] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null); // 選択されたドキュメント情報を保持
  const [docid, setdocid] = useState(3);

  // ドキュメントが選択された際に呼ばれる関数
  const handleDocumentSelect = (documentInfo) => {
    setSelectedDocument(documentInfo);
  };
  const CreateNewRepo = (id) => {
    const url = "https://us-central1-yjs-editor.cloudfunctions.net/addMessage";
    const requestData = {
      id: docid,
      roomName: "room" + docid,
      name: "repository" + docid,
      title: "The greatest document in the world",
    };
    console.log(requestData);
    axios
      .post(url, requestData)
      .then((response) => {
        // リクエスト成功時の処理
        console.log(response.data);
      })
      .catch((error) => {
        // エラー時の処理
        console.error(error);
      });

    setdocid(docid + 1);
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Grid container spacing={12}>
          <Grid item xs={2}>
            <Grid container spacing={0}>
              <RepoList onDocumentSelect={handleDocumentSelect} />
              <Button onClick={CreateNewRepo}>CreateNewRepo</Button>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            {selectedDocument ? (
              <Body selectedDocument={selectedDocument} />
            ) : null}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
