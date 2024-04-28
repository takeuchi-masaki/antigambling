import React from 'react';
import { useState } from 'react';
import './MineGame.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game, Square } from "./games/Games"


function MineGame() {

  const newGame = (rows: number, cols: number) => {
    const bombX = Math.floor(Math.random() * rows);
    const bombY = Math.floor(Math.random() * cols);
    let grid: Array<Array<Square>> = [];
    for(let i = 0; i < rows; i++){
        let arr: Array<Square> = [];
        for(let j = 0; j < cols; j++){
            if(i === bombX && j === bombY){
                arr.push(new Square(i, j, true, true));
            }
            else{
                arr.push(new Square(i, j, true, false));
            }
        }
        grid.push(arr);
    }
    return grid;
  }

  const [grid, setGrid] = useState<Game["grid"]>(newGame(5, 5));
  const game = new Game(true, grid);

  const reveal = (rowIdx: number,  colIdx: number) => {;
    const newGrid: Game["grid"] = grid;
    newGrid[rowIdx][colIdx].hidden = false;
    setGrid([...newGrid]);
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

export default MineGame;

