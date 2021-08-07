import { START_COORDINATE_FOR_TRIANGLE } from "../reducer";

let previousState = null;
let previousPosition = null;

export default function rotateTriangle(state, position) {
  previousState = Object.assign({}, state);

  if (previousPosition !== null) position = previousPosition + 1;
  if (state.row2.length === 0) return START_COORDINATE_FOR_TRIANGLE;

  if (position === 0) {
    let mainCell = state.row1[0];
    for (let row in state) {
      state[row] = [];
    }
    state.row1 = [mainCell];
    state.row2 = [mainCell - 1, mainCell, mainCell + 1];
    previousPosition = previousPosition === null ? null : 0;
  }

  if (position === 1) {
    let mainCell = state.row2[1];
    for (let row in state) {
      state[row] = [];
    }
    state.row1 = [mainCell];
    state.row2 = [mainCell - 1, mainCell];
    state.row3 = [mainCell];
    previousPosition = previousPosition === null ? null : 1;
  }

  if (position === 2) {
    let mainCell = state.row2[1];
    for (let row in state) {
      state[row] = [];
    }
    state.row2 = [mainCell - 1, mainCell, mainCell + 1];
    state.row3 = [mainCell];

    previousPosition = previousPosition === null ? null : 2;
  }

  if (position === 3) {
    let mainCell = state.row2[1];
    for (let row in state) {
      state[row] = [];
    }
    state.row1 = [mainCell];
    state.row2 = [mainCell, mainCell + 1];
    state.row3 = [mainCell];
    previousPosition = previousPosition === null ? null : -1;
  }

  let checkNearBorder = () => {
	  let right = state.row2[state.row2.length - 1] > 9 ? 'right' : false;
	  let left = state.row2[0] < 0 ? 'left' : false;

	  if (right) return right;
	  if (left) return left;

	  return false;
  }

  const check = checkNearBorder();

  if (check === 'right') {
    previousPosition = 1;
    console.log(previousPosition, "prev");
    return previousState;
  }

  if (check === 'left') {
	previousPosition = -1;
    console.log(previousPosition, "prev");
    return previousState;
  }

  return state;
}