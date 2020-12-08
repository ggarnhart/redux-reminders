import React from "react";
import { Command } from "tabler-icons-react";

export default function KeyboardShortcuts() {
  return (
    <>
      <div className="mx-autof flex justify-center align-middle">
        <Command />
        <p>
          + <span className="font-bold">K</span> to add reminder.
        </p>
      </div>
      <div className="mx-autof mt-2 flex justify-center align-middle">
        <p>
          <span className="font-bold">Click</span> on a todo to toggle
          completion.
        </p>
      </div>
    </>
  );
}
