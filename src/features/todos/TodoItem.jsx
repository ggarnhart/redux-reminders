import React from "react";
import { todoCompletedToggle, todoDelete } from "./todoSlice";
import { Trash } from "tabler-icons-react";

import { useDispatch } from "react-redux";

export default function TodoItem(props) {
  const dispatch = useDispatch();
  const renderTodo = (props) => {
    if (props.completed) {
      return (
        <div
          onClick={() => dispatch(todoCompletedToggle(props.id))}
          className="w-full flex justify-between px-10 py-2 items-center bg-gray-200 dark:bg-gray-700 cursor-pointer"
        >
          <p className="line-through">{props.title}</p>
          <Trash onClick={() => dispatch(todoDelete(props.id))} />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => dispatch(todoCompletedToggle(props.id))}
          className="w-full justify-between flex px-10 py-2 items-center bg-gray-200 dark:bg-gray-700 cursor-pointer"
        >
          <p className="">{props.title}</p>
          <Trash onClick={() => dispatch(todoDelete(props.id))} />
        </div>
      );
    }
  };
  return <>{renderTodo(props)}</>;
}
