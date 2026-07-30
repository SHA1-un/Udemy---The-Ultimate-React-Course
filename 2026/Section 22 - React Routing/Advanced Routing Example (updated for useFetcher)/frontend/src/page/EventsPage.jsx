import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    const response = await fetch('http://localhost:8081/events');

    if (!response.ok) {
        // throw Error({ message: 'Fetching events failed.' }); 
        // Alternative with using response
        throw new Response(JSON.stringify({ message: "Fetching events failed." }), { status: 500 });
    }

    return response;
}

export default function EventsPage() {
    const loaderData = useLoaderData();
    const events = loaderData.events;

    return (
        <EventsList events={events} />
    );
}