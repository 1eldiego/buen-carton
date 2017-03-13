import { createAction, handleActions } from 'redux-actions';

export const addTip = createAction('TIP_ADD');

const initialState = [];

export default handleActions({
  TIP_ADD: (state, action) => [
    ...state,
    action.payload,
  ],
}, initialState);
