// Body.js
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NextTiptapEditor from "./[repoid]/NextTiptapEditor";
import { UserAuth } from '../api/AuthContext';
import RepositoryActionBar from "../components/RepositoryActionBar";

function Body() {
    return (
        <div>
            <Typography variant="h3">{selectedDocument.title}</Typography>
            <NextTiptapEditor repo={selectedDocument} />
        </div>
    );
}

export default Body;
