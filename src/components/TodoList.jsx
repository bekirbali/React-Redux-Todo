import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <p key={todo.id DAS}> {todo.text}</p>
      ))}
    </div>
  );
};

export default TodoList;
