//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Team from "./components/Team";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const TOUCHDOWN = 7;
  const FIELDGOAL = 3;

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Team name="Lions" isHomeTeam={true} score={homeScore} />
          <div className="timer">00:03</div>
          <Team name="Tigers" isHomeTeam={false} score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + TOUCHDOWN)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + FIELDGOAL)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + TOUCHDOWN)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + FIELDGOAL)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
