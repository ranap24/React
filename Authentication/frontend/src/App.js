import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage,{action as SignupAction} from './pages/Authentication.js'
import { checkauthLoader, tokenLoader } from './util/getToken.js';
import {action as logout} from './pages/logout.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id : 'root',
    loader : tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader : checkauthLoader
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader : checkauthLoader
          },
        ],
      },
      {
        path : 'auth',
        element:<AuthenticationPage/>,
        action : SignupAction
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path : 'logout',
        action : logout
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
