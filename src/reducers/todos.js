const initialState = [
    {
        id: 1,
        name: 'Nupirk pieno'
    },
    {
        id: 2,
        name: 'Išsiplauk galvą'
    }
]

let currentID = 3;

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: currentID++ ,
                    name: action.name
                }
            ];
        case 'REMOVE_TODO':
            return state.filter((todo) => {
                return todo.id !== action.id
            });
        case 'SAVE_EDIT':
            return state.map((todo) => {
                    if(todo.id === action.id) {
                        return {
                            id: action.id,
                            name: action.name
                        }
                    } else {
                        return todo
                    }
                });
        default:
            return state;
    }
}

export default todos;