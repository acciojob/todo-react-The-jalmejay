import React from "react";

const Todo = ({ list, deleteId }) => {
  return (
    <div>
      {list && list.map((e) => (
        <div key={e.id} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
          <p style={{ margin: 0 }}>{e.name}</p>
          <button onClick={() => deleteId(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
