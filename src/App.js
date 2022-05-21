import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import MerchantGame from "./pages/merchant_game/merchant_game.component";
import Settings from "./pages/settings/settings.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/game" element={<MerchantGame />} />
      </Routes>
    </div>
  );
}

export default App;
