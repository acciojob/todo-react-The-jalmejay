import React from "react";
import './app.css';

const Todo = ({ list, deleteId }) => {
  return (
    <div className="todoLists">
      {list && list.map((e) => (
        <div key={e.id}  className="list">
          <p>{e.name}</p>
          <button className="deleteBtn" onClick={() => deleteId(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
