import React from 'react';

function TeamButtons(props) {
  //Score amounts
  const TOUCHDOWN = 7;
  const FIELDGOAL = 3;

  //Props
  const teamName = props.name;
  const teamLocale = props.isHomeTeam ? 'home' : 'away';

  //Callback to change team scores
  const addScore = props.clickHandler;

  //Capitalizes first letter of string to uppercase.
  const teamLocaleFormatted = teamLocale[0].toUpperCase() + teamLocale.slice(1);

  //Return both buttons
  return (
    <div className={`${teamLocale}Buttons`}>
      <button className={`${teamLocale}Buttons__touchdown`} onClick={() => addScore(teamName, TOUCHDOWN)}>{teamLocaleFormatted} Touchdown</button>
      <button className={`${teamLocale}Buttons__fieldGoal`} onClick={() => addScore(teamName, FIELDGOAL)}>{teamLocaleFormatted} Field Goal</button>
    </div>
  )
}

export default TeamButtons;