import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export async function EventsPageLoader() {
    const response = await fetch('http://localhost:8081/events');

    if (!response.ok) {
        // setError('Fetching events failed.');
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export default function EventsPage() {
    const fetchedEvents = useLoaderData();

    return (
        <EventsList events={fetchedEvents} />
    );
}