import React from "react";
import Cell from "./Cell";
import Row from "./Row";

function BuildRow({ coords }) {
  let listTD;

  if (coords) {
    const cellsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    listTD = cellsIndex.map((number) => {
      let coincidence = coords.some((item) => item === number);

      if (coincidence) {
        return <Cell className="element-cell" key={number.toString()} />;
      } else {
        return <Cell key={number.toString()} />;
      }
    });
  }

  return (
    <>
      <tr>{listTD === undefined ? <Row /> : listTD}</tr>
    </>
  );
}

export default BuildRow;
