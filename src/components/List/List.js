import React from 'react';
import './List.css'

const List = (props) => {
    return (
        <section className="ingredient-list">
            <h2>Todo List</h2>
            <ul>
                <li>
                    <span>Apple</span>
                    <span>
                        <button>x</button>
                    </span>
                </li>
                <li>
                    <span>Apple</span>
                    <button>x</button>
                </li>
            </ul>
        </section>
    );
}

export default List;
