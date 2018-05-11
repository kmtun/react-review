import React, { Component } from 'react';

import Todo from './Todo.jsx';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todoList: [],
        };
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    handleInput(e) {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const todoList = this.state.todoList;
        todoList.push(this.state.todo);
        this.setState({ todoList });
        e.target.reset();
    }

    deleteTodo(index) {
        const todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.setState({ todoList });
    }
    render() {
        return (
            <div>
                <h1>My Todo List> </h1>
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    Add todo: <input onKeyUp = { (e) => this.handleInput(e) } required/>
                    <button> &#10010; </button>  
                </form>
                <div>
                    {this.state.todoList.map((todo, index) =>(
                        <Todo key = {index} todo={todo} index={index} deleteTodo = {this.deleteTodo}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default TodoList;