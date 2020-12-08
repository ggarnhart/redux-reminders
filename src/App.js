import React, { useState, useRef, useEffect } from "react";
import { HotKeys } from "react-hotkeys";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import TodoInput from "./features/todos/TodoInput";
import TodoList from "./features/todos/TodoList";
import KeyboardShortcuts from "./features/todos/KeyboardShortcuts";
import Trash from "./features/todos/Trash";

function App() {
  const [isFocused, setFocused] = useState(false);
  const appRef = useRef(null);
  const [trashShown, setTrashShown] = useState(false);
  const keyMap = {
    FOCUS_INPUT: "command+k",
    TOGGLE_TRASH: "command+u",
  };

  const keyHandlers = {
    FOCUS_INPUT: () => {
      setFocused(true);
    },
    TOGGLE_TRASH: () => {
      setTrashShown(!trashShown);
    },
  };

  useEffect(() => {
    appRef.current.focus();
  });

  return (
    <HotKeys keyMap={keyMap} handlers={keyHandlers}>
      <div
        className="App min-h-screen dark:bg-gray-800 dark:text-white"
        ref={appRef}
      >
        <div className="h-half-screen">
          <TodoInput
            needsFocused={isFocused}
            focusIsSet={() => setFocused(false)}
          />
          <TodoList />
        </div>

        <div className="h-quarter-screen flex flex-col justify-end">
          <KeyboardShortcuts />
          {/* <Trash trashShown={trashShown} /> */}
        </div>
      </div>
    </HotKeys>
  );
}

export default App;
