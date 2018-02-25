import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewInput from './NewInput';
import Todolist from './Todolist';
import Paper from 'material-ui/Paper';

const Todo = () => (
    <MuiThemeProvider>
        <Paper style={style.paper}>
            <NewInput />
            <Todolist />
        </Paper>
    </MuiThemeProvider>
)


export default Todo;

const style = {
    paper:
        {
            width: '400px',
            margin: '0 auto',
            padding: '5px 10px'
        },
    todolist:
        {
            'height': "200px",
            overflow: 'auto'
        }
}