import React, { useState } from "react";
import GameField from "./GameField/GameField";
import InfoGame from "./InfoGame/InfoGame";
import Keyboard from "./Keyboard/Keyboard";

function App() {
  const [turn, rotate] = useState(false);
  const [shift, setShift] = useState("");
  const [clickRotate, setClick] = useState(0);

  return (
    <div className="app">
      <fieldset>
        <legend>SUPER</legend>
        <div className="app__game-screen">
          <GameField
            turnRotate={turn}
            shift={shift}
            setShift={setShift}
            clickRotate={clickRotate}
          />
          <InfoGame />
        </div>
      </fieldset>
      <Keyboard rotate={rotate} setShift={setShift} setClick={setClick} />
    </div>
  );
}

export default App;
