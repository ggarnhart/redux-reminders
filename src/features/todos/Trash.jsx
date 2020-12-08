import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function Trash(props) {
  const filteredTodos = (state) => state.todos.filter((todo) => todo.deleted);
  const deletedTodos = useSelector(filteredTodos);

  if (props.trashShown === true) {
    return (
      <div>
        {deletedTodos.map((todo, index) => (
          <TodoItem
            id={todo.id}
            key={`${index}Del`}
            title={todo.title}
            deleted={true}
          />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}
