import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MinePage from "./pages/MinePage";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { casinoTheme } from './themes/CasinoTheme';
import { lightTheme } from './themes/LightTheme';

export default function App() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : casinoTheme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage mode={mode} toggleMode={toggleColorMode} />} />
                    <Route path="/mines" element={<MinePage mode={mode} toggleMode={toggleColorMode} /> } />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}