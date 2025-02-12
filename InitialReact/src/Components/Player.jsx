import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setisEditing] = useState(false);
  const [isChanged, setisChanged] = useState(name);

  function handleClick() {
    setisEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, isChanged);
    }
  }

  function handleChange(event) {
    setisChanged(event.target.value);
    console.log("hello");
  }

  let buttonName = "Edit";
  let playerName = (
    <>
      <span className="player-name">{isChanged}</span>
    </>
  );

  if (isEditing) {
    buttonName = "Save";
    playerName = (
      <>
        <input type="text" required value={isChanged} onChange={handleChange} />
      </>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{buttonName}</button>
      </span>
    </li>
  );
}
