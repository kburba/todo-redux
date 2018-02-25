import { combineReducers } from 'redux';
import todos from './todos';
import editing from './editing';

const todoApp = combineReducers({
    todos,
    editing
})

export default todoApp;