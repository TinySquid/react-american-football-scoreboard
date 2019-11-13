import React from "react";

//Returns a reset button used to clear scoreboard
function ResetButton(props) {

  //Callback to reset scoreboard
  const resetGame = props.resetHandler;

  return (
    <button onClick={() => resetGame()}>Reset Game</button>
  )
}

export default ResetButton;

