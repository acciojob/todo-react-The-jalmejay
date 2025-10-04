import React,{useState} from "react";
import './../styles/App.css';
import Todo form "./Todo.js";

const App = () => {
  const [list ,setList]=useState([]);
  const [name,setName]=useState("");
  function handleSubmit(){
    let item={
      id:Math.floor(Math.random()*9000)+1000,
      name:name,
    }
    setList([item,...setList]);
    setName("");
  }
  function deleteId(id){
  let newList=list.filter(e=>e.id!==id);
    setList([newLsit]);
  };
  
  return (
    <div> 
    <h1>To-Do List </h1>
  <form>
    <input type="text"  onChange={(e)=>setName(e.target.value)} />
    <button onClick={handleSubmit}>Add ToDo</button>
    </form>
  <Todo list={list} deleteId={deleteId}/>  
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
