import React from "react";
import { Paper, AppBar, Typography, PaletteMode, Container, MenuItem } from "@mui/material";
import ToggleModeButton from "./ToggleModeButton";
import { useNavigate } from "react-router-dom";

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
            elevation={3}
            sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                borderRadius: '99px',
                bgcolor: '#66008F',
                maxHeight: 60,
                border: '1px solid',
                borderColor: 'divider',
                padding: theme.spacing(3),
                boxShadow: 3,
              })}
              >
                <MenuItem onClick={routeHome}>
                    <Typography variant="h4" color={'white'}>Header Component</Typography>
                </MenuItem>
                <MenuItem onClick={routeMines}>
                    <Typography variant="h5" color={'white'}>Mines</Typography>
                </MenuItem>
                <ToggleModeButton mode={mode} toggleColorMode={toggleMode} />
            </Paper>
        </Container>
    </AppBar>
};

export default Header;