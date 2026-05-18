import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchUserPlaces() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/user-places');
        if (!response.ok) throw new Error("Network Error");
  
        const data = await response.json();
  
        setUserPlaces(data.places);
      } catch (error) {
        setError(error);
      }
    }
    
    setIsLoading(false);
    fetchUserPlaces();
  }, []);

  function saveUserPlaces(places) {
    async function saveUserPlaces() {
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ places })
      });

      if (!response.ok) throw new Error("Network Error");

      // const data = await response.json();

      // setUserPlaces(data.places);
    }

    saveUserPlaces();
  }

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });


    saveUserPlaces([...userPlaces, selectedPlace]);
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    saveUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));

    setModalIsOpen(false);
  }, [userPlaces]);

  return (
    <>
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
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isLoading}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
