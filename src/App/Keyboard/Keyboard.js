import React from "react";
import ControllButtons from "./ControllButtons";
import SystemButtons from "./SystemButtons";

function Keyboard({ rotate, setShift, setClick }) {
  return (
    <div className="app__keyboard">
      <SystemButtons />
      <ControllButtons rotate={rotate} setShift={setShift} setClick={setClick} />
    </div>
  );
}

export default Keyboard;
