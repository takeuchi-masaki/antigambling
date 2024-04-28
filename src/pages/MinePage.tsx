import React from "react";
import { Stack, PaletteMode } from "@mui/material";
import Header from "../components/Header";
import Mines from "../games/Mines"
import BackgroundBox from "../components/BackgroundBox";

interface MinePageProps {
    mode: PaletteMode,
    toggleMode: () => void
}
 
const MinePage = ({mode, toggleMode}: MinePageProps) => {
    return <BackgroundBox>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} />
            <Mines />
        </Stack>
    </BackgroundBox>
};
 
export default MinePage;