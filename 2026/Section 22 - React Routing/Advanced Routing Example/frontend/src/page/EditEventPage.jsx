import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
    const loaderData = useRouteLoaderData("event-details");
    const event = loaderData.event;

    return <EventForm event={event}/>
}