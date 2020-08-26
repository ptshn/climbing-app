const setNavMenuBool = (state = true, action) => {
    switch (action.type) {
        case 'SET_NAVMENU_BOOL':
            return !state
        default:
            return state;
    }
}

export default setNavMenuBool;