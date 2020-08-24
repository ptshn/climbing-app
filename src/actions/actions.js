export const ADD_HOLDS = 'ADD_HOLDS';
export const ADD_RANDOMIZED_BOLT_NUMS = 'ADD_RANDOMIZED_BOLT_NUMS';
export const ADD_SLICED_BOLT_NUMS = 'ADD_SLICE_BOLT_NUMS';

export const addHolds = holds => ({
    type: ADD_HOLDS,
    payload: holds
});

export const addRandomizedBoltNums = boltNumbers => ({
    type: ADD_RANDOMIZED_BOLT_NUMS,
    payload: boltNumbers
});

export const addSlicedBoltNums = boltArrays => ({
    type: ADD_SLICED_BOLT_NUMS,
    payload: boltArrays
});