import React from "react";

const Todo (props)=>{
  const [list,deleteId]=props;
  
  return(<div>
    {
      list&&lsit.map((e)=>{
    return (
      <div>
    <p>{e.name}</p>
                     <button onClick={deleteId(e.id)}>Delete</button>
    </div>
    )
    });
    }
    </div>)
};
export default Todo;
