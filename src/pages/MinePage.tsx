import React from "react";
import { useTheme, Stack, PaletteMode } from "@mui/material";
import Header from "../components/Header";
import BackgroundBox from "../components/BackgroundBox";
import MineDark from "../games/MineDark";
import MineLight from "../games/MineLight";

interface MinePageProps {
    mode: PaletteMode;
    toggleMode: () => void;
    balance: number;
    updateBalance: (delta: number) => void;
}
const MinePage = ({mode, toggleMode, balance, updateBalance}: MinePageProps) => {
    const isCasinoTheme = useTheme().palette.mode === 'dark';
    return <BackgroundBox>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} balance={balance} updateBalance={updateBalance} />
            {isCasinoTheme ? <MineDark /> : <MineLight updateBalance={updateBalance}/>}
        </Stack>
    </BackgroundBox>
};
 
export default MinePage;