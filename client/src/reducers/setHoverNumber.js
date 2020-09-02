const initialState = {
    selected: []
}

const setHoverNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOVER_NUMBER':
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
};

export default setHoverNumber;