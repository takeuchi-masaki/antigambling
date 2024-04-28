import React from "react";
import { FormControl, Box, Stack, Typography, Button, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { updateBalance } from "../components/MoneyDisplay";

interface CenteredStackProps {
    sz: number;
    children: React.ReactNode;
}
function CenteredStack({sz, children}: CenteredStackProps) {
    return <Stack
            height={sz}
            width={sz}
            display={'flex'}
            sx={{
                bgcolor: 'primary.light',
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
            }}
            alignItems="center"
            justifyContent="center"
            spacing={5}
        >
            {children}
    </Stack>
}

function randomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

interface settingsProps{
    sz: number;
    setBombs: (bombs: number) => void;
    startGame: () => void;
}
function settings({sz, setBombs, startGame}: settingsProps) {
    function handleBombSelect(event: SelectChangeEvent<number>) {
        setBombs(event.target.value as number);
    }
    return <CenteredStack sz={sz}
        >
            <FormControl fullWidth>
                <InputLabel>Number of Bombs</InputLabel>
                <Select
                    onChange={handleBombSelect}
                >
                    <MenuItem value={1}>1 Bomb</MenuItem>
                    <MenuItem value={2}>2 Bombs</MenuItem>
                    <MenuItem value={3}>3 Bombs</MenuItem>
                </Select>
            </FormControl>
            <Button 
                variant="contained" 
                color='secondary' 
                size='large' 
                onClick={startGame}
                >
                    Start Game
            </Button>
        </CenteredStack>
}

export default function MineSimple() {
    const sz = 550;
    const [gameOver, setGameOver] = React.useState(false);
    const [remainingSquares, setRemainingSquares] = React.useState(0);
    const [bombs, setBombs] = React.useState(0);

    function startGame() {
        setGameOver(false);
        setRemainingSquares(25);
    }

    return <Stack direction={'row'} alignItems={'center'} padding={5} spacing={7}>
        <CenteredStack sz={sz}>
            <Typography variant="h5">
                Bombs: {bombs} Remaining Squares: {remainingSquares}
            </Typography>
            <Button 
                variant="contained" 
                color='secondary' 
                size='large' 
                >
                    button
            </Button>
        </CenteredStack>
        {settings({sz, setBombs, startGame})}
    </Stack>
}