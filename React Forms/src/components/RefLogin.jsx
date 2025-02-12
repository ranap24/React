import { useState,useRef } from "react";

export default function Login() {

  const [isInValid,setisInValid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event)
  {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const isValid = enteredEmail && enteredEmail.includes('@');

    if(!isValid)
    {
        setisInValid(true);
        return;
    }
    setisInValid(false);
    console.log("Sending Http Request.....");
    
  }

  


  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" ref = {email}  />
          {isInValid && <div className="control-error"><p>please enter a valid email</p></div> } 
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref = {password}  />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
