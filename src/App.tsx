import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MinePage from "./pages/MinePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mines" element={<MinePage /> } />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
