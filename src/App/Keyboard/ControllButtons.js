import React from "react";

function ControllButtons({ rotate, setShift, setClick }) {
  return (
    <div className="app__controll-buttons">
      <div className="app__move-buttons">
        <div className="app__move-left" onClick={() => setShift("left")}></div>
        <div className="app__move-down"></div>
        <div
          className="app__move-right"
          onClick={() => setShift("right")}
        ></div>
      </div>
      <div
        className="app__rotate-button"
        onClick={() => {
          setClick((click) => {
            if (click === 3) {
              return 0;
            } else {
              return click + 1;
            }
          });
          rotate((turn) => !turn);
        }}
      ></div>
    </div>
  );
}

export default ControllButtons;
