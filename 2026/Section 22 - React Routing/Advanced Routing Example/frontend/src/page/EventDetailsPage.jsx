import { useParams, useLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export async function loader({ params }) {
    const response = await fetch(`http://localhost:8081/events/${params.id}`);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "Could not find event." }), { status: 500 });
    }

    return response;
}

export default function EventDetailsPage() {
    const loaderData = useLoaderData();
    console.log(loaderData)
    const event = loaderData.event;

    return <EventItem event={event} />
}