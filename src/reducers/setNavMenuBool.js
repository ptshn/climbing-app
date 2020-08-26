const setNavMenuBool = (state = false, action) => {
    switch (action.type) {
        case 'SET_NAVMENU_BOOL':
            return !state
        default:
            return state;
    }
}

export default setNavMenuBool;