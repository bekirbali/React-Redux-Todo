import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [{ id: 1, text: "hello world", completed: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [
        ...state.todoList,
        {
          id: new Date().getTime(),
          text: action.payload,
          completed: false,
        },
      ];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
