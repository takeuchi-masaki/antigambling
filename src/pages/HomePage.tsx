import React from "react";
import { Stack, PaletteMode } from "@mui/material";
import BackgroundBox from "../components/BackgroundBox";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface HomePageProps {
    mode: PaletteMode;
    toggleMode: () => void;
}

const HomePage = ({mode, toggleMode}: HomePageProps) => {
    return <BackgroundBox>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} />
            <Hero />
        </Stack>
    </BackgroundBox>
};

export default HomePage;