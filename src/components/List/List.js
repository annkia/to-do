import React from "react";
import "./List.css";

let noteList = [
  { id: "a", value: "Buy cat's food", completed: false },
  { id: "b", value: "Call to sister", completed: false },
  { id: "c", value: "Clean up bathroom", completed: false },
];

const List = () => {
  return (
    <div className="main-view">
      <h1>To do list</h1>
      <h2>Your list:</h2>
      <h2>
        {noteList.map((note) => (
          <ul>
            <li key={note.id}>{note.value}</li>
            <input type="checkbox"></input>
            <button>Remove</button>
          </ul>
        ))}
      </h2>
    </div>
  );
};

export default List;
