import { START_COORDINATE_FOR_L_SHAPED } from "../reducer";

let previousState = null;
let previousPosition = null;

export default function rotateL_Shaped(state, position) {
  previousState = Object.assign({}, state);

  if (previousPosition !== null) position = previousPosition + 1;

  if (state.row2.length === 0) return START_COORDINATE_FOR_L_SHAPED;
  
  if (position === 0) {
    let mainCell = state.row1[0] - 1;
    for (let row in state) {
      state[row] = [];
    }

    for (let i = 0; i < 3; i++) {
      state.row2.push(mainCell + i);
    }

    state.row1.push(mainCell);

	previousPosition = previousPosition === null ? null : 0;
  }

  if (position === 1) {
    let mainCell = state.row2[1];
    for (let row in state) {
      state[row] = [];
    }

    for (let i = 1; i < 4; i++) {
      state[`row${i}`] = [mainCell];
    }

    state.row3.unshift(mainCell - 1);
	previousPosition = previousPosition === null ? null : 1;

  }

  if (position === 2) {
    let mainCell = state.row3[0];
    for (let row in state) {
      state[row] = [];
    }

    for (let i = 0; i < 3; i++) {
      state.row2.push(mainCell + i);
    }

    state.row3 = [mainCell + 2];
	previousPosition = previousPosition === null ? null : 2;

  }

  if (position === 3) {
    let mainCell = state.row2[1];
    for (let row in state) {
      state[row] = [];
    }

    for (let i = 1; i < 4; i++) {
      state[`row${i}`] = [mainCell];
    }

    state.row1.push(mainCell + 1);
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
	return previousState;
  }

  if (check === 'left') {
	  previousPosition = -1;
	return previousState;
  }

  return state;
}
