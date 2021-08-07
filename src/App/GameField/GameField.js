import React, { useEffect, useReducer, useState } from "react";
import buildElements from "./buildElements";
import randomElement from "./randomElement";
import reducer from "./reducer";

const initialState = {
  row1: [],
  row2: [],
  row3: [],
  row4: [],
};

function GameField({ turnRotate, shift, setShift, clickRotate }) {
  const [row, setRow] = useState(-1);
  const [location, dispatch] = useReducer(reducer, initialState);
  const [listOfLines, setListOfLines] = useState(null);
  const [element, setElement] = useState(randomElement());

  useEffect(() => {
    let requestID;
    function startAnimation(speed) {
      let startTime = null;

      const animate = (time) => {
        if (startTime === null) {
          startTime = time;
        }

        let runtime = time - startTime;

        if (runtime < speed) {
          requestID = requestAnimationFrame(animate);
        } else {
          setRow((row) => row + 1);
          startTime = time;
          requestID = requestAnimationFrame(animate);
        }
      };

      requestID = requestAnimationFrame(animate);
    }

    // startAnimation(800);
    return () => cancelAnimationFrame(requestID);
  }, [row]);

  useEffect(() => {
    dispatch({ type: element, turn: turnRotate, click: clickRotate });
  }, [turnRotate, clickRotate, element]);

  useEffect(() => {
    dispatch({ type: element, shift: shift });
    setShift("");
  }, [shift, setShift, element]);

  useEffect(() => {
    const coordinate = buildElements(row, location);
    setListOfLines(coordinate);
  }, [location, row, clickRotate, shift]);

  return (
    <div className="app__table">
      <table>
        <tbody>{listOfLines}</tbody>
      </table>
    </div>
  );
}

export default GameField;
