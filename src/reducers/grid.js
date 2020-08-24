const initialState = {
    rando: [],
    slicer: []
}

const grid = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RANDOMIZED_BOLT_NUMS':
            console.log('randooo')
            console.log(action)
            return {
                ...state,
                rando: action.payload,
                slicer: [...state.slicer]
            }
        case 'ADD_SLICE_BOLT_NUMS':
            console.log('slice')
            console.log(action)
            return {
                ...state,
                rando: [...state.rando],
                slicer: action.payload
            }
        default:
            return state;
    }
};


// const grid = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_RANDOMIZED_BOLT_NUMS':
//             console.log(action)
//             return [...action.payload]
//         case 'ADD_SLICE_BOLT_NUMS':
//             console.log('slice')
//             console.log(action)
//             return action.payload
//         default:
//             return state;
//     }
// };
export default grid;