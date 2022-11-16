import React from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";
import CounterCard from "./components/CounterCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Redux Toolkit and Typescript</h5>
        <PokemonCard />
        <CounterCard />
      </header>
    </div>
  );
}

export default App;
