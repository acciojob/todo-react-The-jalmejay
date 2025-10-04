import React from "react";
import './app.css';

const Todo = ({ list, deleteId }) => {
  return (
    <ul className="todoLists">
      {list && list.map((e) => (
        <li key={e.id}  className="list">
          <p>{e.name}</p>
          <button className="deleteBtn" onClick={() => deleteId(e.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
