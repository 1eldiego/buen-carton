import { handleActions } from 'redux-actions';

const initialState = {
  amount: 0,
};

export default handleActions({
  TIP_ADD: (state, action) => ({
    amount: state.amount + action.payload,
  }),
}, initialState);
