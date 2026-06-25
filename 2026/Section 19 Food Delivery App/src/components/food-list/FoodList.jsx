import { useEffect, useState } from "react"
import FoodCard from "./FoodCard";
import Error from "../Error";

export default function FoodList() {
    const [availableItems, setAvailableItems] = useState([]);
    const [error, setError] = useState("");
    async function loadAvailableItems() {
        try {
            const response = await fetch(`http://localhost:3000/meals`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) return;

            const data = await response.json();
            setAvailableItems(data)
        } catch (error) {
            setError(error || error.message);
        }
    }


    useEffect(() => {
        loadAvailableItems();
    }, []);

    return <>
        {!error && <ul id="meals">
            {availableItems.map((item) => {
                return <FoodCard key={item.id} foodItem={item}/>
            })}
        </ul>}

        {error && <Error message={"Could not load data. Please try again"}/>}
    </>
}