import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      inputTodo: '',
    }
  }

  toggleCompleted = id => {
    this.setState({
      toDos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return {
            ...todo,
          };
        }
      })
    });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.inputTodo, completed: false, id: Date.now() }
      ],
      inputTodo: ''
    });
  };

  changeTodo = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearCompleted = event => {
    event.preventDefault();
    let complete = this.state.todos.filter( todo => {
      return todo.completed != true
    });
    this.setState({
      todos: complete
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo List: MVP</h1>
        </div>
        <TodoList 
          todos={this.state.todos}
          handleToggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          value={this.state.inputTodo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
