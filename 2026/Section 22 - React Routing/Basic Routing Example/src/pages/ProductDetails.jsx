import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    return <h1>Details for product with id { id }</h1>
}