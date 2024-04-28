import React from "react";
import { Stack, PaletteMode } from "@mui/material";
import BackgroundBox from "../components/BackgroundBox";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface HomePageProps {
    mode: PaletteMode;
    toggleMode: () => void;
    balance: number;
    updateBalance: (delta: number) => void;
}

const HomePage = ({mode, toggleMode, balance, updateBalance}: HomePageProps) => {
    return <BackgroundBox>
        <Stack alignItems={'center'}>
            <Header mode={mode} toggleMode={toggleMode} balance={balance} updateBalance={updateBalance}/>
            <Hero />
        </Stack>
    </BackgroundBox>
};

export default HomePage;