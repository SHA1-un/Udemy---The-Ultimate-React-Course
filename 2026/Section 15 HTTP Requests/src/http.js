export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) throw new Error("Network Error");

    const data = await response.json();

    return data.places;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    if (!response.ok) throw new Error("Network Error");

    const data = await response.json();

    return data.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ places })
    });

    if (!response.ok) throw new Error("Network Error");
}