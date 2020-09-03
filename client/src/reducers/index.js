import { combineReducers } from 'redux';
import inputNewHolds from './inputNewHolds';
import addWallNumbers from './addWallNumbers';
import setNavMenuBool from './setNavMenuBool';
import setHoverNumber from './setHoverNumber';
import setWallFilterBool from './setWallFilterBool';

export default combineReducers({
    inputNewHolds,
    addWallNumbers,
    setNavMenuBool,
    setHoverNumber,
    setWallFilterBool
});