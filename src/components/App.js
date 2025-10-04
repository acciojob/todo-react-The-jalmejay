import React, { useState } from 'react';
// import './../styles/App.css';
import Todo from './Todo';

const App = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  function handleSubmit() {
    let item = {
      id: Math.floor(Math.random() * 9000) + 1000,
      name: name,
    };
    setList([item, ...list]);
    setName('');
  }
  function deleteId(id) {
    let newList = list.filter(e => e.id !== id);
    setList(newList);
  }

  return (
    <div>
      <h1>To-Do List </h1>
      <div>
        <input type='text' onChange={e => setName(e.target.value)} />
        <button onClick={handleSubmit}>Add ToDo</button>
      </div>
      <Todo list={list} deleteId={deleteId} />
      {/* Do not remove the main div */}
    </div>
  );
};

export default App;
