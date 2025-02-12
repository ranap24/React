
import { useState,useRef } from "react";

export default function Player() {

  const [enterPlayerName,setenterPlayerName] = useState(null);
  const Playername = useRef();

  function handleClick()
  {
    setenterPlayerName(Playername.current.value);
    Playername.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={Playername} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
