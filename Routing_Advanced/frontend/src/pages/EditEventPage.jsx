import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm.js';

export default function EditEventPage()
{
    const data = useRouteLoaderData('event-loader');
    return (
            <EventForm method = 'PATCH'event={data.event} />
    );
}