import React from 'react';
import { useState } from 'react';
import './MineDark.css';
import { Game, Square } from "./mineUtil"
import { Stack, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import CenteredStack from '../components/CenteredStack';

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

interface MineDarkProps {
    updateBalance: (delta: number) => void;
}
export default function MineDark({updateBalance}: MineDarkProps) {
    const sz = 550;
    const [bombs, setBombs] = useState(0);
  const newGame = (rows: number, cols: number, bombs: number) => {
    let s = new Set<number>();
    while(s.size != bombs){
      const bombX = Math.floor(Math.random() * rows);
      const bombY = Math.floor(Math.random() * cols);
      s.add(bombX * 5 + bombY);
    }
    
    let grid: Array<Array<Square>> = [];
    for(let i = 0; i < rows; i++){
        let arr: Array<Square> = [];
        for(let j = 0; j < cols; j++){
          arr.push(new Square(i, j, true, false));
        }
        grid.push(arr);
    }
    Array.from(s).forEach((i) =>{
      grid[Math.floor(i/rows)][i % cols].isBomb = true;
    })
    return grid;
  }

  const [grid, setGrid] = useState<Game["grid"]>(newGame(5, 5, bombs));
  const game = new Game(true, grid);

  const reveal = (rowIdx: number,  colIdx: number) => {
    const newGrid: Game["grid"] = grid;
    newGrid[rowIdx][colIdx].hidden = false;
    setGrid([...newGrid]);
    if(newGrid[rowIdx][colIdx].isBomb === true){
      setTimeout(function() { alert("Game over!"); setGrid(newGame(5, 5, bombs)); }, 1000);
    }
  }

  function startGame() {
    if (bombs === 0) return;
    setGrid(newGame(5, 5, bombs));
    updateBalance(-5);
  }

  return (
    <Stack direction={'row'} alignItems={'center'} padding={5} spacing={7}>
        <div className = "App">
        {grid.map((row, rowIdx) => (
            <div key = {rowIdx} className = "row">
            {row.map((square, colIdx) => (
                <div 
                key = {colIdx}
                className={`square ${square.hidden ? '' : 'revealed'}`}
                data-value = {square.isBomb} 
                onClick = {() => reveal(rowIdx, colIdx)}>
                {square.isBomb 
                    ? <img src="/antigambling/img/Bomb.png"></img> 
                    : <img src="/antigambling/img/Diamond.png"></img>}
                </div>
            ))}
            </div>
        ))}
        </div>
        {settings({sz, setBombs, startGame})}
    </Stack>
  )
}
