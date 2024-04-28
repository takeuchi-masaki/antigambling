import React from "react";
import { Stack, alpha, PaletteMode, Box } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface HomePageProps {
    mode: PaletteMode;
    toggleMode: () => void;
}

const HomePage = ({mode, toggleMode}: HomePageProps) => {
    return <Box 
        sx={(theme) => ({
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
            <Hero />
        </Stack>
    </Box>
};

export default HomePage;