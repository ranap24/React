import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchingPlaces } from './http.js';
import useFetch from '../CustomHooks/useFetch.js';


async function fechSortedPlaces()
{
  const places = await fetchingPlaces();

  return new Promise((resolve)=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedplaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude);

        resolve(sortedplaces);
      });
  });
}
  

export default function AvailablePlaces({ onSelectPlace }) {



  const {
    isloading,
    error,
    fetchedData:availablePlaces,
    setfetchedData:setavailablePlaces
  } = useFetch(fechSortedPlaces,[]);

  return (
    <Places
      title="Available Places"
      isloading = {isloading}
      loadingText = {"Fetching the places data...."}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
