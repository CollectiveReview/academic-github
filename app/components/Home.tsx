"use client";

import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Body from "@/app/components/Body";
import RepoList from "@/app/components/RepoList";
import axios from "axios";
import NextTiptapEditor from "./NextTiptapEditor";

const documents = [
  { id: 1, name: 'Document 1', title: 'The greatest document in the world', roomName: 'room1', doc: 'doc1', owner: 'IiUSAJhdkIbBuUca1UV44zATkrl2' },
  { id: 2, name: 'Document 2', title: 'The greatest world', roomName: 'room1', doc: 'doc1', owner: null },
  // 他のドキュメントを追加
];

const Home = () => {
  // const classes = useStyles();
  // const [isConnected, setIsConnected] = useState(false);
  // const [selectedDocument, setSelectedDocument] = useState(null); // 選択されたドキュメント情報を保持
  // const [docid, setdocid] = useState(3);
  // ドキュメントが選択された際に呼ばれる関数
  // const handleDocumentSelect = (documentInfo: any) => {
  //   setSelectedDocument(documentInfo);
  // };
  const selectedDocument = documents[0]

  // const CreateNewRepo = (id: any) => {
  //   const url = "https://us-central1-yjs-editor.cloudfunctions.net/addMessage";
  //   const requestData = {
  //     id: docid,
  //     roomName: "room" + docid,
  //     name: "repository" + docid,
  //     title: "The greatest document in the world",
  //   };
  //   console.log(requestData);
  //   axios
  //     .post(url, requestData)
  //     .then((response) => {
  //       // リクエスト成功時の処理
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // エラー時の処理
  //       console.error(error);
  //     });

  //   setdocid(docid + 1);
  // };


  return (
    <div className="flex items-center">
      <Grid container spacing={12}>
        <Grid item xs={10}>
          {selectedDocument ? (
            <Body selectedDocument={selectedDocument} />
          ) : null}
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
