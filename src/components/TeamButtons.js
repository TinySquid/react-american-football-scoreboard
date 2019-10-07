import React from 'react';

function TeamButtons(props) {
  const TOUCHDOWN = 7;
  const FIELDGOAL = 3;

  const teamName = props.name;
  const teamLocale = props.isHomeTeam ? 'home' : 'away';
  const addScore = props.clickHandler;

  const teamLocaleFormatted = teamLocale[0].toUpperCase() + teamLocale.slice(1);

  return (
    <div className={`${teamLocale}Buttons`}>
      <button className={`${teamLocale}Buttons__touchdown`} onClick={() => addScore(teamName, TOUCHDOWN)}>{teamLocaleFormatted} Touchdown</button>
      <button className={`${teamLocale}Buttons__fieldGoal`} onClick={() => addScore(teamName, FIELDGOAL)}>{teamLocaleFormatted} Field Goal</button>
    </div>
  )
}

export default TeamButtons;