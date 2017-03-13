import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import tips from './ducks/tips';
import wallet from './ducks/wallet';

const reducers = combineReducers({
  tips,
  wallet,
});

export default createStore(
  reducers,
  {},
  applyMiddleware(logger()),
);

