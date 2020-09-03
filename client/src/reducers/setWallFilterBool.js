const setWallFilterBool = (state = false, action) => {
    switch (action.type) {
        case 'SET_WALLFILTER_BOOL':
            return !state
        default:
            return state;
    }
}

export default setWallFilterBool;