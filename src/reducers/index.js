import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';

const reducers = {
  SearchReducer
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
