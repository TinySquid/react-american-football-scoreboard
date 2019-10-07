import React from "react";
import TeamButtons from "./TeamButtons";
import ResetButton from "./Reset";

function Buttons(props) {

  const addScore = props.clickHandler;
  const resetGame = props.resetHandler;
  const teams = props.teams;

  return (
    <section className="buttons">
      <TeamButtons {...teams.home} clickHandler={addScore} />
      <TeamButtons {...teams.away} clickHandler={addScore} />
      <ResetButton resetHandler={resetGame} />
    </section>
  )
}

export default Buttons;

