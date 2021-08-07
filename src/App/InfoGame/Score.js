import React from "react";

function Score() {
  return (
    <div className="app__game-score">
      <p>Score:</p>
      <p>
        <span  className="empty-span">0</span>
        <span  className="empty-span">0</span>
        <span  className="empty-span">0</span>
        <span  className="empty-span">0</span>
        <span>5</span>
      </p>
    </div>
  );
}

export default Score;