import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then(response => {
        if (!response.ok) throw new Error("Network Error");
        return response.json();
      }).then(data => setPlaces(data.places))
      .catch(error => console.log(`Fetch error ${error}`))
  }, []);

  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
