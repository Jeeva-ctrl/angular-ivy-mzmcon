import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

export { counterReducer };
