'use client';

export default function mealerrorpage({error})
{
    return(
        <main className="error">
            <h1>An error occured</h1>
            <p>{error.message}</p>
        </main>
    );
}