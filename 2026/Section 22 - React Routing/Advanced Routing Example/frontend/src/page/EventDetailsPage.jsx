import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
    const { id } = useParams();
    return <h1>EventDetailsPage for event with id: {id}</h1>
}