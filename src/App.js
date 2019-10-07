//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const teams = {
    home: {
      name: "Lions",
      isHomeTeam: true
    },
    away: {
      name: "Tigers",
      isHomeTeam: false
    }
  }

  function addScore(teamName, amount) {
    if (teamName === "Lions") {
      setHomeScore(homeScore + amount);
    } else {
      setAwayScore(awayScore + amount);
    }
  }

  return (
    <div className="container">
      <Scoreboard teams={teams} homeScore={homeScore} awayScore={awayScore} />
      <Buttons teams={teams} clickHandler={addScore} />
    </div>
  );
}

export default App;
