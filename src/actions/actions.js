export const addTodo = (name) => {
    return {
        type: 'ADD_TODO', name
    }
}

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO', id
    }
}

export const setEdit = (id, index) => {
    return {
        type: 'SET_EDIT', id, index
    }
}

export const saveEdit = (id, name) => {
    return {
        type: 'SAVE_EDIT', id, name
    }
}