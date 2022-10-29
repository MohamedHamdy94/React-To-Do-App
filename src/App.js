import React from 'react';
import Todo from './Todo/TodoApp/Todo';
import Child from './Todo/childTodo/Child';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);

  const addData = (text) => {

    let id = 1;
    if (todos.length > 0) {
      id = todos.at(-1).id  + 1;
    }
    console.log(id);
    let todo = { id: id, text: text, done: false };
    let newTodos = [ ...todos]
    newTodos.push(todo)
    // let newTodos = [ ...todos,todo];
    console.log(newTodos)
    setTodos(newTodos);
  };

  const removeData = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    console.log(updatedTodos)

    setTodos(updatedTodos);
  };

  const handelDone = (id) => {
    console.log(id);
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo.done)
        todo.done = !todo.done
      }
      console.log(todo.done)
      return todo;
    });
    console.log(updatedTodos)
    setTodos(updatedTodos);
  };
  return (
    <>
      <Todo addData={addData} />
      {todos.length === 0 && (
        <h1 className="text-secondary mt-2 fw-bold text-center">
          Let's get some work done!
        </h1>
      )}
      <Child todos={todos} removeData={removeData} handelDone={handelDone} />
    </>
  );
}

export default App;
