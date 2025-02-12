import {useLoaderData,} from 'react-router-dom';
import UserTable from '../components/UserTable';
import { useState } from 'react';

function ListUsers()
{
    const [name,setName] = useState();
    const data = useLoaderData();
    console.log("userList");
    return(
        <>
        <UserTable data = {data}/>
        <input value={name} onChange={e => setName(e.target.value)}/>
        </>
        
    );
}

export async function loader()
{
    const getData = async() => {
        const response = await fetch('http://localhost:3000');
        return response.json();
    }
    const result = await getData();
    console.log(result);
    return result;
}

export default ListUsers;