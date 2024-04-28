import React from "react";
import { alpha, Box, Stack, PaletteMode } from "@mui/material";
import Header from "../components/Header";
import Mines from "../games/Mines"

interface MinePageProps {
    mode: PaletteMode,
    toggleMode: () => void
}
 
const MinePage = ({mode, toggleMode}: MinePageProps) => {
    return <Box 
        sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
        height: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #E9C1FC, #FFF)'
            : `linear-gradient(#E9C1FC, ${alpha('#090E10', 0.0)})`,       
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} />
            <Mines />
        </Stack>
    </Box>
};
 
export default MinePage;