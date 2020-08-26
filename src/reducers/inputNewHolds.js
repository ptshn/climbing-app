const inputNewHolds = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_HOLDS':
            return { ...state, holds: action.payload }
        default:
            return state;
    }
};

export default inputNewHolds;