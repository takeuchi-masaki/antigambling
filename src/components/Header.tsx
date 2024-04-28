import React from "react";
import { Box, Paper, AppBar, Stack, PaletteMode, Container, } from "@mui/material";
import ToggleModeButton from "./ToggleModeButton";
import { useNavigate } from "react-router-dom";
import MoneyDisplay from "./MoneyDisplay";

interface HeaderProps {
    mode: PaletteMode,
    toggleMode: () => void
}

const Header = ({mode, toggleMode}: HeaderProps) => {
    let navigate = useNavigate(); 
    const routeMines = () =>{ 
        let path = `/mines`; 
        navigate(path);
    }
    const routeHome = () => {
        let path = `/`; 
        navigate(path);
    }

    let imgPath = mode === 'dark' ? '/antigambling/twisted.png' : '/antigambling/nottwisted.png';

    return <AppBar position="static" sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }} >
        <Container>
            <Paper
            elevation={4}
            sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderRadius: '9px',
                bgcolor: '#66008F',
                border: '1px solid',
                borderColor: 'divider',
                padding: theme.spacing(3),
                boxShadow: 3,
                height: 100,
              })}
              >
                <Box
                    component={'img'}
                    src={imgPath}
                    sx={{
                        height: 65,
                        width: 300,
                    }}
                    onClick={routeHome}
                />
                <Stack direction={'row'}>
                <MoneyDisplay />
                <ToggleModeButton mode={mode} toggleColorMode={toggleMode} />
                </Stack>
            </Paper>
        </Container>
    </AppBar>
};

export default Header;