import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blank");
    } else {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Tasky App</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            placeholder="your todo title hear"
          />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
