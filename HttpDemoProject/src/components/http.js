export async function fetchingPlaces ()
{
    const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
       
      if(!response.ok)
      {
        throw new Error("Failed to Fectch the places");
      }

      return resData.places;
}

export async function updatePlaces (places)
{
    const response = await fetch("http://localhost:3000/user-places",{
        method : 'PUT',
        body: JSON.stringify({places}),
        headers : {
            'Content-Type':'application/json'
        } 
    });
    const resData = await response.json();
    if(!response.ok)
    {
        throw new  Error("Unable to store the places please try again");
    }

    return resData;
}

export async function getStoredPlaces()
{
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();

    if(!response.ok)
    {
        throw new Error("Failed to retrieve the stored data");
    }
    return resData.places;
}