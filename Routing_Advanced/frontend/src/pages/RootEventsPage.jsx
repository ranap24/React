import { Outlet } from "react-router-dom";
import EventsNavigationPage from '../components/EventsNavigation.js';

function EventLayoutPage()
{
    return(
        <>
        <EventsNavigationPage/>
        <Outlet/>
        </>
    );
}

export default EventLayoutPage;