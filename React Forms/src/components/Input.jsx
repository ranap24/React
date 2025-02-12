export default function Input({label,id,error,...props})
{
    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input
        id = {id}
        {...props} 
        />
        <div className="control-error">{error && <p>{error}</p>}</div>
        </>
    );

}