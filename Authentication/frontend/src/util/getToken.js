import { redirect } from "react-router-dom";

export function getDuration()
{
    const storedExpiration = localStorage.getItem('expiration');
    const now = new Date();
    const expiration = new Date(storedExpiration);


    const expirationDuration = expiration.getTime() - now.getTime();

    return expirationDuration;
}

export default function getToken()
{
    const token = localStorage.getItem('token');
    const expiration = getDuration();

    if(!token)
    {
        return null;
    }
    
    if(expiration < 0)
    {
        return "EXPIRED";
    }

    return token;
}

export function tokenLoader()
{
  return getToken();
}

export function checkauthLoader()
{
    const token = getToken()

    if(!token)
        return redirect('/auth');
    return null;
}