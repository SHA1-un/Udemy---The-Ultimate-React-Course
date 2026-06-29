import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
    { id: "event-1", title: "Event 1", date: new Date().toDateString, image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { id: "event-2", title: "Event 2", date: new Date().toDateString, image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { id: "event-3", title: "Event 3", date: new Date().toDateString, image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function EventsPage() {
    return <>
        <h1>EventsPage</h1>
        <EventsList events={DUMMY_EVENTS}/>
    </>
}