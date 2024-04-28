import React from "react";
import { useTheme, Stack, PaletteMode } from "@mui/material";
import Header from "../components/Header";
import BackgroundBox from "../components/BackgroundBox";
import MineDark from "../games/MineDark";
import MineLight from "../games/MineLight";

interface MinePageProps {
    mode: PaletteMode,
    toggleMode: () => void
}

const MinePage = ({mode, toggleMode}: MinePageProps) => {
    const isCasinoTheme = useTheme().palette.mode === 'dark';

    return <BackgroundBox>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} />
            {isCasinoTheme ? <MineDark /> : <MineLight />}
        </Stack>
    </BackgroundBox>
};
 
export default MinePage;