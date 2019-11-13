import React from "react";
import TeamButtons from "./TeamButtons";
import ResetButton from "./Reset";

//Returns our buttons for both teams
function Buttons(props) {

  //Props
  const addScore = props.clickHandler;
  const teams = props.teams;

  //Callback to reset scoreboard stats
  const resetGame = props.resetHandler;

  //Returns buttons
  return (
    <section className="buttons">
      <TeamButtons {...teams.home} clickHandler={addScore} />
      <TeamButtons {...teams.away} clickHandler={addScore} />
      <ResetButton resetHandler={resetGame} />
    </section>
  )
}

export default Buttons;

