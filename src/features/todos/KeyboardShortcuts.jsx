import React from "react";
import { Command } from "tabler-icons-react";
import { useSelector } from "react-redux";

export default function KeyboardShortcuts() {
  const selectTodos = (state) => state.todos;
  const todos = useSelector(selectTodos);

  const deletedTodos = todos.filter((todo) => todo.deleted === true);
  const deletedShortcut = () => {
    if (deletedTodos.length > 0) {
      return (
        <div className="mx-autof mt-2 flex justify-center align-middle">
          <Command />
          <p>
            + <span className="font-bold">U</span> to show deleted todos.
          </p>
        </div>
      );
    }
  };
  return (
    <>
      <div className="mx-autof flex justify-center align-middle">
        <Command />
        <p>
          + <span className="font-bold">K</span> to add reminder.
        </p>
      </div>
      {/* {deletedShortcut()} */}
      <div className="mx-autof mt-2 flex justify-center align-middle">
        <p>
          <span className="font-bold">Click</span> on a todo to toggle
          completion.
        </p>
      </div>
    </>
  );
}
