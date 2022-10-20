import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WinLayout } from "./winLayout";

function WinList({ winList, deleteWin }) {
  const [winLog, setWinLog] = useLocalStorage("winLog", []);
  console.log(winLog);
  return (
    <>
      <ul style={{ padding: 0 }}>
        {winList.map((win) => (
          <WinLayout key={win.id} win={win} deleteWin={deleteWin} />
        ))}
      </ul>
    </>
  );
}

export default WinList;
