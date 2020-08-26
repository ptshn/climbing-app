const initialState = {
    staticBoltArr: [],
    sliceBoltArr: []
}

const addWallNumbers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STATIC_BOLT_NUMS':
            return {
                ...state,
                staticBoltArr: action.payload,
                sliceBoltArr: [...state.sliceBoltArr]
            }
        case 'ADD_SLICE_BOLT_ARR':
            return {
                ...state,
                staticBoltArr: [...state.staticBoltArr],
                sliceBoltArr: action.payload
            }
        default:
            return state;
    }
};

export default addWallNumbers;