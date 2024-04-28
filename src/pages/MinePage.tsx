import React from "react";
import { Stack, PaletteMode } from "@mui/material";
import Header from "../components/Header";
import Mines from "../games/Mines"

interface MinePageProps {
    mode: PaletteMode,
    toggleMode: () => void
}
 
const MinePage = ({mode, toggleMode}: MinePageProps) => {
    return <Stack>
        <Header mode={mode} toggleMode={toggleMode} />
        <Mines />
    </Stack>
};
 
export default MinePage;