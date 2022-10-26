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
          // Here you could consider not using another WinLayout component. I think WinList is small enough to contain the HTML of WinList, and then you wouldn't have to worry about passing props further down.
          <WinLayout key={win.id} win={win} deleteWin={deleteWin} />
        ))}
      </ul>
    </>
  );
}

export default WinList;
