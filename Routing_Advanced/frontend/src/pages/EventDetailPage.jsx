import { useRouteLoaderData,redirect } from "react-router-dom";
import EventItem from "../components/EventItem";


export default function EventDetailPage()
{
    const data = useRouteLoaderData('event-loader');
    
    return(
        <>
         <EventItem event={data.event} />
        </>

    );
}

export async function loader({params})
{
    const id = params.someid;
    const response = await fetch('http://localhost:8080/events/'+ id);
    if(!response.ok)
    {
        throw new Response(JSON.stringify({message: "The url is not valid, please enter a valid url "}),{status : 500});
    }
    else
    {
        return response;
    }
}

export async function action({request,params})
{
    const id = params.someid;
    const response = await fetch('http://localhost:8080/events/' + id,{
        method : request.method
    });
    if(!response.ok)
    {
        throw new Response(JSON.stringify({message: "The url is not valid, please enter a valid url "}),{status : 500});
    }
    else
    {
        return redirect('/events');
    }
}