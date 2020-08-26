export const ADD_HOLDS = 'ADD_HOLDS';
export const ADD_STATIC_BOLT_NUMS = 'ADD_STATIC_BOLT_NUMS';
export const ADD_SLICE_BOLT_ARR = 'ADD_SLICE_BOLT_ARR';
export const SET_NAVMENU_BOOL = 'SET_NAVMENU_BOOL';
export const SET_HOVER_NUMBER = 'SET_HOVER_NUMBER';

export const addHolds = holds => ({
    type: ADD_HOLDS,
    payload: holds
});

export const addStaticBoltNums = boltNums => ({
    type: ADD_STATIC_BOLT_NUMS,
    payload: boltNums
});

export const addSliceBoltArr = boltArr => ({
    type: ADD_SLICE_BOLT_ARR,
    payload: boltArr
});

export const setNavMenuBool = bool => ({
    type: SET_NAVMENU_BOOL,
    payload: bool
});

export const setHoverNum = number => ({
    type: SET_HOVER_NUMBER,
    payload: number
});