import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { lightTheme } from '../themes/LightTheme';

interface ToggleProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function ToggleModeButton({ mode, toggleColorMode }: ToggleProps) {
    return (
    <Button
    variant="text"
    onClick={toggleColorMode}
    aria-label="button to toggle theme"
    sx={{ color: lightTheme.palette.secondary.main }}
    >
    {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
    ) : (
        <ThumbDownAltIcon fontSize="small" />
    )}
    </Button>
  );
}