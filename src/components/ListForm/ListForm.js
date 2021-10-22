import React, { useState } from 'react';
import './ListForm.css';

const ListForm = props => {

  const [todoValue, setTodoValue] = useState('');

  const submitHandler = (event) => {
     event.preventDefault();
     props.addTodo({todo: todoValue});
     setTodoValue('');
  }

    return (
      <section className="ingredient-form">
          <div className="card">
              <form onSubmit={submitHandler}>
                <span className="form-control">
                  <input type="text" id="todo" placeholder="Add a todo"
                      value={todoValue} onChange={event => {
                        setTodoValue(event.target.value);
                      }}/>
                </span>
                <span className="ingredient-form__actions">
                  <button type="submit">Add</button>
                </span>
              </form>
          </div>
      </section>
    );
    
}

export default ListForm;