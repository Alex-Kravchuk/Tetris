import React from "react";
import Level from "./Level";
import NextElement from "./NextElement";
import Score from "./Score";
import SystemSigns from "./SystemSigns";

function InfoGame() {
  return (
    <div className="app__infogame">
      <Score />
      <Level />
      <NextElement />
      <SystemSigns />
    </div>
  );
}

export default InfoGame;
