import React from "react";

// Components
import GameTitle from "./components/GameTitle";
import Board from "./components/Board";

function App() {
  return (
    <main className="App">
      <section className="min-h-screen pt-6 pb-8 flex flex-col items-center bg-gradient-to-t from-indigo-300 to-purple-300">
        <GameTitle />
        <Board />
      </section>
    </main>
  );
}

export default App;
