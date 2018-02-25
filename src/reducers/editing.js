const initialState = {
    id: null,
    index: null
}

const editing = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_EDIT':
            return state = {
                id: action.id,
                index: action.index
            }
        default:
            return state
    }
}

export default editing;