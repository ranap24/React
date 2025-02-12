import AuthForm from '../components/AuthForm';
import {  redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action ({request})
{
   const data = await request.formData();

   const searchParams = new URL(request.url).searchParams;

   const mode = searchParams.get('mode') || 'login';

   if(mode !== 'signup' && mode !== 'login')
   {
    throw new Response({message : "Unsupported mode"},{status : 422});
   }

   const authdata = {
    email : data.get('email'),
    password : data.get('password')
   };

   const response = await fetch('http://localhost:8080/'+mode,{
    method:'POST',
    body:JSON.stringify(authdata),
    headers:{
      'Content-Type':'application/json'
    }
   });

   if(response.status === 422 || response.status === 402)
   {
    return response;
   }
   
   if(!response.ok)
   {
    throw new Response({message:'could not authenticate user'},{status : 500});
   }

   const resData = await response.json();

   const token = resData.token;

   const expiration = new Date();

   expiration.setHours(expiration.getHours() + 1);

   localStorage.setItem('token',token);
   localStorage.setItem('expiration',expiration.toISOString());

   return redirect('/');
}