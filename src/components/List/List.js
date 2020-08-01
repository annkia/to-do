import React, { useState } from "react";
import "./List.css";

let noteList = [
  { id: "a", noteValue: "Buy cat's food", completed: false },
  { id: "b", noteValue: "Call to sister", completed: false },
  { id: "c", noteValue: "Clean up bathroom", completed: false },
];

const List = () => {
  const [note, takeNote] = useState({
    noteValue: "",
    id: "",
    completed: false,
  });

  const [list, addToList] = useState(noteList);

  const handleChange = (event) => {
    takeNote({ ...note, noteValue: event.target.value });
  };

  const handleSubmit = (event) => {
    if (note) {
      addToList(list.concat(note));
    }

    takeNote("");
    event.preventDefault();
  };

  return (
    <div className="main-view">
      <h2>Add new element</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={note.noteValue} onChange={handleChange} />
        <button type="sumit">Save</button>
      </form>
      <h2>Your list:</h2>
      <ul>
        {list.map((element) => (
          <div>
            <li key={element.id}>{element.noteValue}</li>
            <input type="checkbox"></input>
            <button>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
