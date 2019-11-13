import React from 'react';


//Creates a team
function Team(props) {
  //Props
  const teamName = props.name;
  const teamLocale = props.isHomeTeam ? 'home' : 'away';

  //Score from App.js
  let score = props.score;

  //Return team
  return (
    <div className={teamLocale}>
      <h2 className={`${teamLocale}__name`}>{teamName}</h2>
      <div className={`${teamLocale}__score`}>{score}</div>
    </div>
  )
}

export default Team;
