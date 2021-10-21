import React from 'react';
import './List.css'

const List = (props) => {
    return (
        <section className="ingredient-list">
            <h2>Todo List</h2>
            <ul>
                {props.todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.todo}</span>
                        <span>
                            <button onClick={props.onRemove.bind(this, todo.id)}>x</button>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default List;
