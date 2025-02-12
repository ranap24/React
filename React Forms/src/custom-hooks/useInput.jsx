import { useState } from "react";


export default function useInput(defaultValue,validateFun)
{
    const[enteredValue,setenteredValue] = useState(defaultValue);  
    
      const [didEdit,setdidEdit] = useState(false);

      const hasError = didEdit && !validateFun(enteredValue); 
    
    
      function handleEnteredValue(value)
      {
        setenteredValue(value);
        setdidEdit(false);
      }
    
      function handleBlurValue()
      {
        setdidEdit(true);
      }

      return{
         value : enteredValue,
         handleBlurValue,
         handleEnteredValue,
         hasError
      }
}