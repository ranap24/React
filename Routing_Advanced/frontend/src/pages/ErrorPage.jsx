import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage()
{
    const error = useRouteError();
    let title = "An error Occured";
    let message = "Something went wrong";

    if(error.status === 500)
    {
        title = "Not Found the url";
        message = JSON.parse(error.data).message;
    }

    
    return (
      <PageContent title={title}><p>{message}</p></PageContent>
    );
}