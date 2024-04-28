import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mines from "./pages/Mines";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mines" element={<Mines /> } />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
