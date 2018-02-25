import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addTodo, setEdit, saveEdit } from '../actions/actions';

class NewInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: ''
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.editing.index !== null && this.props.editing.index !== prevProps.editing.index) {
            const todoInput = this.props.todos[this.props.editing.index].name;
            this.setState(() => ({ todoInput }))
        }
    }

    onInputChange = (e) => {
        const todoInput = e.target.value;
        this.setState(() => ({ todoInput }))
    }

    onAddSubmit = (e) => {
        e.preventDefault();
        if (this.state.todoInput !== '') {
            this.props.handleSubmit(this.state.todoInput)
            this.setState(() => ({ todoInput: '' }))
        }
    }

    onSaveSubmit = (e) => {
        e.preventDefault();
        const id = this.props.editing.id;
        const name = this.state.todoInput;
        this.props.saveEdit(id, name);
        this.props.resetEdit();
        this.setState(() => ({ todoInput: '' }))
    }

    render() {
        return (
            <form onSubmit={this.props.editing.id === null ? this.onAddSubmit : this.onSaveSubmit}>
                <TextField
                    floatingLabelText={this.props.editing.id === null ? "Add new task" : "Edit task"}
                    onChange={this.onInputChange}
                    fullWidth={true}
                    value={this.state.todoInput}
                />
                <RaisedButton label=
                    {this.props.editing.id === null ? "Add" : "Save"}
                    primary={true} type="Submit" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        editing: state.editing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: name => {
            dispatch(addTodo(name))
        },

        saveEdit: (id, name) => {
            dispatch(saveEdit(id, name))
        },

        resetEdit: () => {
            dispatch(setEdit(null, null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInput);