import React from "react";
import Team from "./Team";
import Timer from "./Timer";
import BottomRow from "./BottomRow";

//Creates a scoreboard with two teams
function Scoreboard(props) {
  const teams = props.teams;
  let homeScore = props.homeScore;
  let awayScore = props.awayScore;

  //Return scoreboard content
  return (
    <section className="scoreboard">
      <div className="topRow">
        <Team {...teams.home} score={homeScore} />
        <Timer />
        <Team {...teams.away} score={awayScore} />
      </div>
      <BottomRow />
    </section>
  )
}

export default Scoreboard;

