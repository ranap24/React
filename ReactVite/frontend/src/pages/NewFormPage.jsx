import { redirect } from 'react-router-dom';
import NewForm from '../components/NewForm';

function NewFormPage()
{
    console.log("execution");

    return(
        <>  
        <NewForm action = '/ListUsers'/>
        </>

    );
}

export default NewFormPage;

export async function action({request,params})
{
    const data = await request.formData();
    const interests = data.getAll('interests');
    const  storingdata = {
        name : data.get('name'),
        email : data.get('email'),
        phone : data.get('phone'),
        gender : data.get('Gender'),
        interests : [...interests]
    };

    const postData = async()=>{
        
        const response = await fetch('http://localhost:3000/form',{
        method : 'POST',
        body : JSON.stringify(storingdata),
        headers : {
            'Content-Type' : 'application/json'
        }

    });
    if(!response.ok)
    {
        throw new Error({message:"could not fetch"},{status : 500});
    }

    return response.json();
   
}
const result = await postData();
console.log(result);
return redirect('/ListUsers');

}