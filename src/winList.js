import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WinLayout } from "./winLayout";

function TodoList({ todos, removeTodo }) {
  const [winLog, setWinLog] = useLocalStorage("winLog", []);
  console.log(winLog);
  return (
    <>
  {/*   <p>{winLog}</p> */}
      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <WinLayout key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
