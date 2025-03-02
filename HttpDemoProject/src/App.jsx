import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { getStoredPlaces, updatePlaces } from './components/http.js';
import Error from './components/Error.jsx';
import useFetch from './CustomHooks/useFetch.js';

function App() {
  const selectedPlace = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdating ,seterrorUpdating] = useState();
  const {
        isloading,
            error,
            fetchedData : userPlaces,
            setfetchedData : setUserPlaces
      }         = useFetch(getStoredPlaces,[]);
      
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];


    });
    try{
      const resData = await updatePlaces([selectedPlace,...userPlaces]);

    }
    catch(error)
    {
      setUserPlaces(userPlaces);
      seterrorUpdating({
        message: error.message || "Failed to update the places"
      });
    }

  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try
    {
      await updatePlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
    }
  catch(error)
  {
    setUserPlaces(userPlaces);
    seterrorUpdating({
      message: error.message || "failed to remove the place"
    });
  }

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError()
  {
    seterrorUpdating(null);
  }



  return (
    <>

    <Modal open = {errorUpdating} onClose={handleError}>
      { errorUpdating && <Error
      title = "Error occured while updating"
      message = {errorUpdating.message}
      />}
    </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error  && 
          <Error
         title={"Error occured while loading the data"}
         message={error.message}
        />}
        {!error &&
          <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isloading={isloading}
          loadingText={"Fetching the places you like ......."}
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
}
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
