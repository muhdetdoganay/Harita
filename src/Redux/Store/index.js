import {createStore, combineReducers} from 'redux';
import {ReducerFunction} from '../Reducer/index.js';
const temp = combineReducers({default: ReducerFunction});
const store = createStore(temp);
export default store;
