import rotateL_Shaped from "./RotateElements/rotateL_Shaped";
import rotateLine from "./RotateElements/rotateLine";
import rotateTriangle from "./RotateElements/rotateTriangle";
export const START_COORDINATE_FOR_LINE = {
  row1: [3, 4, 5, 6],
  row2: [],
  row3: [],
  row4: [],
};
export const START_COORDINATE_FOR_CUBE = {
  row1: [4, 5],
  row2: [4, 5],
  row3: [],
  row4: [],
};
export const START_COORDINATE_FOR_TRIANGLE = {
  row1: [4],
  row2: [3, 4, 5],
  row3: [],
  row4: [],
};
export const START_COORDINATE_FOR_L_SHAPED = {
  row1: [4],
  row2: [4, 5, 6],
  row3: [],
  row4: [],
};

// сказать шо я ахуєвший це нічо не сказать да да

// далі:
//  - обмежувати рух фігури по полю(не давати їй виходити за рамки)
//  - зупиняти падіня біля нижньої раки (причому шоб вони складалися одна на одну)

export default function reducer(state, action) {
  const copy = Object.assign({}, state);

  switch (action.type) {
    case "line":
      if (action.shift === "left") {
        return shiftElements(state, false);
      } else if (action.shift === "right") {
        return shiftElements(state, true);
      } else {
        if (action.click >= 0) {
          return rotateLine(copy, action.click);
        } else {
          return state.row1.length === 0 ? START_COORDINATE_FOR_LINE : state;
        }
      }
    case "cube":
      if (action.shift === "left") {
        return shiftElements(state, false);
      } else if (action.shift === "right") {
        return shiftElements(state, true);
      } else {
        return state.row1.length === 0 ? START_COORDINATE_FOR_CUBE : state;
      }

    case "triangle":
      if (action.shift === "left") {
        return shiftElements(state, false);
      } else if (action.shift === "right") {
        return shiftElements(state, true);
      } else {
        if (action.click >= 0) {
          return rotateTriangle(copy, action.click);
        } else {
          return state.row2.length === 0
            ? START_COORDINATE_FOR_TRIANGLE
            : state;
        }
      }
    case "L-shaped":
      if (action.shift === "left") {
        return shiftElements(state, false);
      } else if (action.shift === "right") {
        return shiftElements(state, true);
      } else {
        if (action.click >= 0) {
          return rotateL_Shaped(copy, action.click);
        } else {
          return state.row2.length === 0
            ? START_COORDINATE_FOR_L_SHAPED
            : state;
        }
      }
    default:
      throw new Error();
  }
}

let previousState;
function shiftElements(state, increment) {
  previousState = Object.assign({}, state);
  if (checkInvalidValues(state, increment)) {
    return previousState;
  } else {
    for (let i = 1; i <= 4; i++) {
      increment
        ? (state[`row${i}`] = state[`row${i}`].map((item) => item + 1))
        : (state[`row${i}`] = state[`row${i}`].map((item) => item - 1));
    }
  }
  return state;
}

function checkInvalidValues(state, increment) {
  let min;
  let max;

  let copy = Object.assign({}, state);

  for (let i = 1; i <= 4; i++) {
    increment
      ? (copy[`row${i}`] = copy[`row${i}`].map((item) => item + 1))
      : (copy[`row${i}`] = copy[`row${i}`].map((item) => item - 1));
  }

  for (let row in copy) {
    max = copy[row].includes(10);
    min = copy[row].includes(-1);

    if (max || min) break;
  }

  return min || max ? true : false;
}
