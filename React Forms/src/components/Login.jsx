import { useState } from "react";
import Input from "./Input";
import useInput from "../custom-hooks/useInput";
import { isEmail,isNotEmpty,hasMinLength, isValidEmail } from "../util/validation";

export default function Login() {

  const {
    value : emailValue,
    handleBlurValue : handleEmailBlurValue,
    handleEnteredValue : handleEmailValue,
    hasError: hasEmailError
  } = useInput('',(value)=>{
    return isEmail(value) && isNotEmpty(value) && isValidEmail(value);
  });
  
 

  const {
    value : passwordValue,
    handleBlurValue : handlePasswordBlurValue,
    handleEnteredValue : handlePasswordValue,
    hasError: hasPasswordError
  } = useInput('',(value)=>hasMinLength(value,6));

  

  function handleSubmit(event)
  {
    event.preventDefault();
    console.log('submitted');
    console.log(enteredValues);
    if(emailisInValid || passwordisInValid)
    {
      return;
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
      <div className="control no-margin">
         <Input
         label = "Email"
         id="email"
         type="email" 
         name="email" 
         value = {emailValue} 
         onChange={(event) => {handleEmailValue(event.target.value)}} 
         onBlur = {handleEmailBlurValue} 
         error = {hasEmailError && 'Please enter a valid email'}
         />
        </div>
        <div className="control no-margin">
         <Input
         label = "Password"
         id="password"
         type="password" 
         name="password" 
         value = {passwordValue} 
         onChange={(event) => {handlePasswordValue(event.target.value)}} 
         onBlur = {handlePasswordBlurValue}
         error = {hasPasswordError && 'Please enter a valid password'} 
         />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
