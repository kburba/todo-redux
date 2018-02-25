import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import ContentClear from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { removeTodo, setEdit } from '../actions/actions';

const Todolist = (props) => (
    <List>
        {props.todos.map((todo, index) => {
            return (
                <ListItem
                    key={todo.id}
                    primaryText={todo.name}
                    onClick={() => props.setEdit(todo.id, index)}
                    rightIconButton={<FloatingActionButton onClick={() => props.removeTodo(todo.id)}
                        mini={true}
                    >
                        <ContentClear />
                    </FloatingActionButton>} />
            )
        })}
    </List>
)

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: id => { dispatch(removeTodo(id)) },
        setEdit: (id, index) => { dispatch(setEdit(id, index)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);