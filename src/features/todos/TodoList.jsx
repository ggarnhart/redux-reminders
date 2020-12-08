import React from "react";
import { useSelector } from "react-redux";
import darkModeShapes from "../../svgs/darkModeShapes.svg";
import lightModeShapes from "../../svgs/lightModeShapes.svg";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const selectTodos = (state) => state.todos;
  const todos = useSelector(selectTodos);

  const deletedTodos = todos.filter((todo) => todo.deleted === true);

  if (todos.length === 0 || deletedTodos.length === todos.length) {
    return (
      <div className="flex flex-col justify-center align-middle h-half-screen">
        <div>
          <img src={lightModeShapes} className="mx-auto mb-5" />
          <h2>Todo: Add some Todos</h2>
        </div>
      </div>
    );
  } else {
    console.log(todos);
    return (
      <div>
        {todos.map((todo, index) =>
          todo.deleted ? (
            <></>
          ) : (
            <TodoItem
              id={todo.id}
              key={index}
              title={todo.title}
              completed={todo.completed}
            />
          )
        )}
      </div>
    );
  }
}
