import React from "react";
import { Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Mines from "../games/Mines"
 
const MinePage = () => {
    return <Stack>
        <Header />
        <Mines />
    </Stack>
};
 
export default MinePage;