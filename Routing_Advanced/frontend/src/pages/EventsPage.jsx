import { useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
   const {events} =  useLoaderData();
  
  return (
    <>
    <Suspense fallback = {<div>Loading the data please Wait !!!!</div>}>
    <EventsList events={events} />
    </Suspense>
      
    </>
  );
}

export default EventsPage;

export async function loader()
{
  const response = await fetch('http://localhost:8080/events');

if (!response.ok) {
 throw new Response(JSON.stringify({message : "The route is not found please enter the correct url"}),{status : 500});
} else {
 const resData = await response.json();
 return {events : resData.events};
}

}
