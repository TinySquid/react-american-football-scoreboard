import React from 'react';


function Team(props) {
  const teamName = props.name;
  const teamLocale = props.isHomeTeam ? 'home' : 'away';

  let score = props.score;

  return (
    <div className={teamLocale}>
      <h2 className={`${teamLocale}__name`}>{teamName}</h2>
      <div className={`${teamLocale}__score`}>{score}</div>
    </div>
  )
}

export default Team;
