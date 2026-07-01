import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:8081/events');

    if (!response.ok) {
        // setError('Fetching events failed.');
    } else {
        return response;
    }
}

export default function EventsPage() {
    const loaderData = useLoaderData();
    const events = loaderData.events

    return (
        <EventsList events={events} />
    );
}