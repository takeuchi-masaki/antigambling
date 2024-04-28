import React from 'react';
import { useState } from 'react';
import './MineDark.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game, Square } from "./games/mineUtil"

function MineDark(bombs: number) {

  const newGame = (rows: number, cols: number, bombs: number) => {
    let s = new Set<number>;
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

  return (
    <div className = "App">
      {grid.map((row, rowIdx) => (
        <div key = {rowIdx} className = "row">
          {row.map((square, colIdx) => (
            <div 
              key = {colIdx}
              className={`square ${square.hidden ? '' : 'revealed'}`}
              data-value = {square.isBomb} 
              onClick = {() => reveal(rowIdx, colIdx)}>
              {square.isBomb ? <img src="/img/Bomb.png"></img> : <img src="/img/Diamond.png"></img>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MineDark;

