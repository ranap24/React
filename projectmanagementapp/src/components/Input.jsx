import { forwardRef } from "react";

const Input = forwardRef(function Input({label,textarea,...props},ref)
{
    return(
        <>
        <label>{label}</label>
        { textarea ? <textarea {...props} ref={ref}/> : <input {...props} ref={ref}/>}
        </>
    );
});

export default Input;