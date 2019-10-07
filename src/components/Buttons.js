import React from "react";
import TeamButtons from "./TeamButtons";

function Buttons(props) {

  const addScore = props.clickHandler;
  const teams = props.teams;

  return (
    <section className="buttons">
      <TeamButtons {...teams.home} clickHandler={addScore} />
      <TeamButtons {...teams.away} clickHandler={addScore} />
    </section>
  )
}

export default Buttons;

