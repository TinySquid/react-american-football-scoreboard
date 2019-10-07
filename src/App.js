//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";

// "When data is being consumed in multiple components it is probably best to centralize that data in state in a top level component" - Lambda TK

function App() {

  //Score for both teams.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  //Teams object used to pass team data to components
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

  //addScore function as described by stretch goal
  //Take a team name and add to the score
  function addScore(teamName, amount) {
    if (teamName === "Lions") {
      setHomeScore(homeScore + amount);
    } else {
      setAwayScore(awayScore + amount);
    }
  }

  //Resets the scores for both teams
  function resetGame() {
    setHomeScore(0);
    setAwayScore(0);
  }

  return (
    <div className="container">
      <Scoreboard teams={teams} homeScore={homeScore} awayScore={awayScore} />
      <Buttons teams={teams} clickHandler={addScore} resetHandler={resetGame} />
    </div>
  );
}

export default App;
