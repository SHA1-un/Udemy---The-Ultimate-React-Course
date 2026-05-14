import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace, isLoading }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Alternative way to use fetch with async/await
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      if (!response.ok) throw new Error("Network Error");

      const data = await response.json();

      setPlaces(data.places);
    }

    fetchPlaces();

    // fetch('http://localhost:3000/places')
    //   .then(response => {
    //     if (!response.ok) throw new Error("Network Error");
    //     return
    //   }).then(data => setPlaces(data.places))
    //   .catch(error => console.log(`Fetch error ${error}`))
  }, []);

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
