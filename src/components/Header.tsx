import React from "react";
import { Box, Paper, AppBar, Typography, PaletteMode, Container, MenuItem, } from "@mui/material";
import ToggleModeButton from "./ToggleModeButton";
import { useNavigate } from "react-router-dom";
import DiamondIcon from '@mui/icons-material/Diamond';
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
                {mode === 'dark' ? (
                    <Box
                        component={'img'}
                        src={'/twisted.png'}
                        sx={{
                            height: 65,
                            width: 300,
                    }}
                    />
                ) : (
                    <MenuItem onClick={routeHome}>
                        <Typography variant="h4" color={'white'}>Don't Get it Twisted</Typography>
                    </MenuItem>
                )}
                <MenuItem onClick={routeMines}>
                    <DiamondIcon sx={{ color: 'white' }} />
                    <Typography variant="h5" color={'white'}>Mines</Typography>
                </MenuItem>
                <MoneyDisplay />
                <ToggleModeButton mode={mode} toggleColorMode={toggleMode} />
            </Paper>
        </Container>
    </AppBar>
};

export default Header;