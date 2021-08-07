import { START_COORDINATE_FOR_LINE } from "../reducer";

let previousClick = null;

function checkNearBorder(state, click) {
  let checkRight = state.row1[3] > 9;
  let checkLeft = state.row1[0] < 0;

  if (checkRight || checkLeft) {
    if (previousClick === null) previousClick = click;
  }

  return checkRight || checkLeft;
}


export default function rotateLine(state, click) {
  const previousState = Object.assign({}, state);

  if (state.row1.length === 0) return START_COORDINATE_FOR_LINE;

  if (previousClick === null) {
    if (click === 0 || click === 2) {
      if (previousState.row2[0] === undefined) {
        let mainCell = state.row1[1];
        for (let row in state) {
          state[row] = [mainCell];
        }
      } else {
        let mainCell = state.row1[0];
        for (let row in state) {
          state[row] = [];
        }
        state.row1 = [mainCell - 1, mainCell, mainCell + 1, mainCell + 2];
      }
    }

    if (click === 1 || click === 3) {
      let mainCell = state.row1[1] ?? state.row1[0];
      for (let row in state) {
        state[row] = [mainCell];
      }
    }
  } else {
    if (previousClick === 0 || previousClick === 2) {
      if (previousState.row1[0] === 1 || previousState.row1[0] === 7) {
        let mainCell = state.row1[0];
        for (let row in state) {
          state[row] = [];
        }
        state.row1 = [mainCell - 1, mainCell, mainCell + 1, mainCell + 2];
      } else {
        state = previousState;
      }
    }

    if (previousClick === 1 || previousClick === 3) {
      let mainCell = state.row1[1];
      for (let row in state) {
        state[row] = [mainCell];
      }
    }
    previousClick = null;
  }

  if (checkNearBorder(state, click)) return previousState;
  return state;
}
