import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MinePage from "./pages/MinePage";
import { Game, Square } from "./games/mineUtil"
import MineDark from "./MineDark"


function App() {
  return MineDark(3);
}

export default App;

