import { createSlice } from "@reduxjs/toolkit";

/**
 * type def example for todo
 * {
 *  title: 'this is the title',
 *  complete: false
 * }
 */

const initialState = [];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoCompletedToggle(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    todoDelete(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.deleted = true;
    },
  },
});
export const { todoAdded, todoCompletedToggle, todoDelete } = todoSlice.actions;
export default todoSlice.reducer;
