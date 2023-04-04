import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(addTodo(text));
    console.log("hello");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input</label>
        <input
          type="text"
          name="input"
          onChange={(e) => setText(e.target.value)}
          placeholder="give something"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default TodoForm;
