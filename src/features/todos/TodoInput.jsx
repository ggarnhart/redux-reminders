import React, { useState, useEffect, useRef } from "react";
import { todoAdded } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TodoInput(props) {
  const selectTodos = (state) => state.todos;
  const todos = useSelector(selectTodos);

  const [reminderValue, setReminderValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const addTodo = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.value = "";
      let todo = {
        completed: false,
        title: reminderValue,
        id: todos.length + 1,
        deleted: false,
      };
      dispatch(todoAdded(todo));
    }
  };

  useEffect(() => {
    if (props.needsFocused) {
      console.log("HI!");
      inputRef.current.focus();
      props.focusIsSet();
    }
  });

  return (
    <div>
      <div className="flex p-5 bg-indigo-500 w-screen ">
        <input
          type="text"
          className="p-2 bg-gray-100 dark:bg-indigo-700 dark:text-white focus:ring-2 focus:ring-indigo-300 focus:outline-none focus:border-transparent rounded-md border-gray-300 w-full"
          placeholder="Click here to add a reminder. Press enter to save."
          onChange={(event) => setReminderValue(event.target.value)}
          onKeyDown={(event) => addTodo(event)}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
