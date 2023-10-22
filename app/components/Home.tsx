"use client";

import React, { useState } from "react";
import { Grid } from "@mui/material";
import Body from "@/app/components/Body";
import axios from "axios";

const documents = [
  {
    id: 1,
    name: 'Document 1',
    title: 'The greatest document in the world',
    roomName: 'room1',
    owner: {
      uid: 'IiUSAJhdkIbBuUca1UV44zATkrl2'
    }
  },
  { id: 2, name: 'Document 2', title: 'The greatest world', roomName: 'room1', doc: 'doc1', owner: null },
  // 他のドキュメントを追加
];

const Home = () => {
  const selectedDocument = documents[0]

  return (
    <div className="flex items-center">
      <Grid container spacing={12}>
        <Grid item xs={10}>
          {selectedDocument ? (
            <Body selectedDocument={selectedDocument} />
          ) : null}
        </Grid>
        <Grid item xs={2}>
          <h1>contributors</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;