import React from "react";

function Buttons(props) {
  const resetGame = props.resetHandler;


  return (
    <button onClick={() => resetGame()}>Reset Game</button>
  )
}

export default Buttons;

