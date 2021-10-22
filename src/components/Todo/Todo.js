import React, { useState, useEffect, useCallback } from 'react';

import ListForm from '../ListForm/ListForm';
import List from '../List/List';

const Todo = (props, params) => {

    const [todoList, setTodoList] = useState([]);

    const addTodoHandler = (todoData) => {
      fetch('https://react-todo-app-70da8-default-rtdb.firebaseio.com/todos.json', {
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setTodoList(prevTodo => [
                ...prevTodo,
                {id: responseData.name, ...todoData}
            ]);
        }).then(() => {
        
        });
    }

    useEffect(() => {
        fetch('https://react-todo-app-70da8-default-rtdb.firebaseio.com/todos.json')
        .then(response => response.json())
        .then(responseData => {
            const loadData = [];
            for (const key in responseData) {
                loadData.push({
                  id: key,
                  todo: responseData[key].todo,
            });
          }
          setTodoList(loadData);
        });
      }, []);


      const removeHandler = useCallback(todoId => {
        fetch(`https://react-todo-app-70da8-default-rtdb.firebaseio.com/todos/${todoId}.json`, {
          method: 'DELETE'
        })
        .then(response => {
            setTodoList(prevTodo =>
            prevTodo.filter(todo => todo.id !== todoId)
          );
        }, []);
      }, []);

    return (
        <div>
           <ListForm addTodo={addTodoHandler}/> 
           <List todos={todoList} 
                onRemove={removeHandler} />
        </div>
    )
}

export default Todo;
