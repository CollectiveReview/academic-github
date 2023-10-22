// Body.js
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextTiptapEditor from "./NextTiptapEditor";
import { UserAuth } from '../api/AuthContext';
import RepositoryActionBar from "./RepositoryActionBar";

function Body({ selectedDocument }) {

    return (
        <div>
            <Typography variant="h3">{selectedDocument.title}</Typography>
            <NextTiptapEditor repo={selectedDocument} />
        </div>
    );
}

export default Body;
