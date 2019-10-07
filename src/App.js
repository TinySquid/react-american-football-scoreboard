//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Team from "./components/Team";
import TeamButton from "./components/TeamButton";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const team = {
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
      <section className="scoreboard">
        <div className="topRow">
          <Team {...team.home} score={homeScore} />
          <div className="timer">00:03</div>
          <Team {...team.away} score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <TeamButton {...team.home} clickHandler={addScore} />
        <TeamButton {...team.away} clickHandler={addScore} />
      </section>
    </div>
  );
}

export default App;
