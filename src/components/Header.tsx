import React from "react";
import { Paper, AppBar, Typography, PaletteMode, Box, Container } from "@mui/material";
import ToggleModeButton from "./ToggleModeButton";

interface HeaderProps {
    mode: PaletteMode,
    toggleMode: () => void
}

const Header = ({mode, toggleMode}: HeaderProps) => {
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
              })}
              >
                <Box>
                    <Typography variant="h3">Header Component</Typography>
                </Box>
                <ToggleModeButton mode={mode} toggleColorMode={toggleMode} />
            </Paper>
        </Container>
    </AppBar>
};

export default Header;