import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import tips from './modules/tips';
import wallet from './modules/wallet';

const reducers = combineReducers({
  tips,
  wallet,
});

export default createStore(
  reducers,
  {},
  applyMiddleware(logger()),
);

