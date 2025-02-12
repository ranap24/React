import MainNavigation from "./MainNavigation";

export default function ErrorPage()
{
    return(
        <>
        <MainNavigation/>
        <main>
            <h2>Error Occured</h2>
            <p> Could not found the Page</p>
        </main>
        </>
    );
}