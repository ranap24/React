import { useState } from "react";
import Output from "./Output";

export default function Greeting()
{
    const [changedtext,setChangedText] = useState(false);

    function handlechange()
    {
        setChangedText(true);
    }
    return(
     <div>

        <h1>hello welcome to the testing</h1>
        {changedtext && <Output>the text is changed</Output>}
        {!changedtext && <Output>the text has not changed</Output>}
        <button onClick={handlechange}>Click to change the text</button>
     </div>
    );
}