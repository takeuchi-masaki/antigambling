import React from "react";
import { Stack, Typography, PaletteMode } from "@mui/material";
import Header from "../components/Header";

interface HomePageProps {
    mode: PaletteMode;
    toggleMode: () => void;
}
 
const HomePage = ({mode, toggleMode}: HomePageProps) => {
    return <Stack alignItems={'center'}>
        <Header mode={mode} toggleMode={toggleMode} />
        <Typography variant="h1">Home page</Typography>
    </Stack>
};

export default HomePage;