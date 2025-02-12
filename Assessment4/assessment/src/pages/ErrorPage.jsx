import { useRouteError } from "react-router-dom";

function ErrorPage()
{
    const error = useRouteError();

    let title = 'Page Not Found';
    let message = 'Please enter a valid url';

    if(error.status === 500)
    {
        title = 'Internal Server Error';
        message = JSON.parse(error.message);
    }

    if(error.status === 404)
    {
        title = 'Not Found';
        message = JSON.parse(error.data).message;
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default ErrorPage;