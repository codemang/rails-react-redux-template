import { INCREMENT_COUNT } from "../constants/action-types";

const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNT) {
    return Object.assign({}, state, { count: state.count + 1 });
  }
  return state;
}
export default rootReducer;
