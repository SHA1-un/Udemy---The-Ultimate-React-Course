import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import Modal from './Modal.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from "../http.js"


export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        setIsLoading(true)
        const unsortedPlaces = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(unsortedPlaces, position.coords.latitude, position.coords.longitude);
          setPlaces(sortedPlaces);
          setIsLoading(false);
        })

      } catch (error) {
        setError({ message: error.message || "Network Error" });
        setIsLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  function handleError() {
    setError(null);
  }

  if (error) {
    return <Modal open={error} onClose={handleError}>
      {error && <Error
        title={"Error!"}
        message={error.message}
        onConfirm={handleError}
      />}
    </Modal>
  }

  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isLoading}
    />
  );
}
