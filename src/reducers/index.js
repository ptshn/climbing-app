import { combineReducers } from 'redux';
import holdsInput from './holdsInput';
import grid from './grid';

export default combineReducers({
    holdsInput,
    grid
});