import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export async function action({ request, params }) {
    const formData = await request.formData();
    const eventData = {
        title: formData.get("title"),
        date: formData.get("date"),
        image: formData.get("image"),
        description: formData.get("description"),
    };

    const response = await fetch('http://localhost:8081/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventData)
    });

    // Intercept validation error and return response so that it can be gracefully handled.
    if (response.status === 422) return response;
    if (!response.ok) throw new Response(JSON.stringify({ message: "Could not save event." }), { status: 500 });

    return redirect("/events");
}

export default function NewEventPage() {
    return <EventForm />
}