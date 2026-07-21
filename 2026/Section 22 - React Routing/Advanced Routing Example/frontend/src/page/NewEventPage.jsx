import { useActionData } from "react-router-dom";
import EventForm from "../components/EventForm";

async function action({ request, params }) {
    
}

export default function NewEventPage() {
    const formData = useActionData();
    // ...
    return <EventForm />

}