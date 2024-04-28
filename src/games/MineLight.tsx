import React from "react";
import { FormControl, Stack, Typography, Button, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import CenteredStack from "../components/CenteredStack";

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
    return <CenteredStack height={sz} width={sz}
        >
            <Typography variant="h5">Bet Cost: $5</Typography>
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

interface MineSimpleProps {
    updateBalance: (delta: number) => void;
}
export default function MineLight({updateBalance}: MineSimpleProps) {
    const sz = 550;
    const [gameOver, setGameOver] = React.useState(false);
    const [remainingSquares, setRemainingSquares] = React.useState(0);
    const [bombs, setBombs] = React.useState(0);
    const [prevRolls, setPrevRolls] = React.useState<number[]>([]);
    function startGame() {
        if (bombs === 0) return;
        setGameOver(false);
        setRemainingSquares(25);
        updateBalance(-5);
    }
    function handleLose() {
        setGameOver(true);
    }
    function handlePickSquare() {
        if (gameOver) return;
        const roll = randomInt(remainingSquares - 1);
        setPrevRolls([...prevRolls, roll]);
        if (roll < bombs) {
            handleLose();
        }
    }
    function handleEndGame() {
        if (gameOver) return;
        setGameOver(true);
        updateBalance(prevRolls.length);
    }

    return <Stack direction={'row'} alignItems={'center'} padding={5} spacing={7}>
        <CenteredStack height={sz} width={sz}>
            <Typography variant="h5">
                Bombs: {bombs} Remaining Squares: {remainingSquares}
            </Typography>
            <Button 
                variant="contained" 
                color='secondary' 
                size='large' 
                onClick={handlePickSquare}
                >
                    Pick a Random Square
            </Button>
            <Button 
                variant="contained" 
                color='secondary' 
                size='large' 
                onClick={handleEndGame}
                >
                    End Game
            </Button>
        </CenteredStack>
        {settings({sz, setBombs, startGame})}
    </Stack>
}