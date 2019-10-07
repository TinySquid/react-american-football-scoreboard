import React, { useState } from 'react';

function TeamButton(props) {
  const [score, setScore] = useState(props.initialScore);
  const teamLocale = props.teamLocale;

  return (
    <div className={`${teamLocale}Buttons`}>
      <button className={`${teamLocale}Buttons__touchdown`} onClick={() => setScore(score + 7)}>{`${teamLocale} Touchdown`}</button>
      <button className={`${teamLocale}Buttons__fieldGoal`} onClick={() => setScore(score + 3)}>{`${teamLocale} Field Goal`}</button>
    </div>
  )
}

export default TeamButton;

{/* <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => Team.setScore(awayScore + TOUCHDOWN)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + FIELDGOAL)}>Away Field Goal</button>
</div> */}