import React from "react";
import Team from "./Team";
import BottomRow from "./BottomRow";

//teams={teams} homeScore={homeScore} awayScore={awayScore}

function Scoreboard(props) {
  const teams = props.teams;
  let homeScore = props.homeScore;
  let awayScore = props.awayScore;


  return (
    <section className="scoreboard">
      <div className="topRow">
        <Team {...teams.home} score={homeScore} />
        <div className="timer">00:03</div>
        <Team {...teams.away} score={awayScore} />
      </div>
      <BottomRow />
    </section>
  )
}

export default Scoreboard;

