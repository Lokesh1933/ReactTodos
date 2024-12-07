import React, { useState } from "react";

function App() {
  const [text, saveText] = useState("");
  const [items, setItems] = useState([]);

  function inputChange(event) {
    const value = event.target.value;
    saveText(value);
  }
  function handleItem() {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
    saveText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputChange} type="text" value={text} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
