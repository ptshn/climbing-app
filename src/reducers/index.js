import { combineReducers } from 'redux';
import inputNewHolds from './inputNewHolds';
import addWallNumbers from './addWallNumbers';
import setNavMenuBool from './setNavMenuBool';

export default combineReducers({
    inputNewHolds,
    addWallNumbers,
    setNavMenuBool
});