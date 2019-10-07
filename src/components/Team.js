import React, { useState } from 'react';

function Team(props) {
  const [teamName] = useState(props.name);
  const [score, setScore] = useState(props.initialScore);
  const teamLocale = props.isHomeTeam === "true" ? 'home' : 'away';
  // console.log(props.isHomeTeam);



  return (
    <div className={teamLocale}>
      <h2 className={`${teamLocale}__name`}>{teamName}</h2>
      <div className={`${teamLocale}__score`}>{score}</div>
    </div>
  )
}

export default Team;
