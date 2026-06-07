import { useEffect, useState } from "react"
import FoodCard from "./FoodCard";

export default function FoodList() {
    const [availableItems, setAvailableItems] = useState([]);
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
            console.log("Oops!")
        }
    }


    useEffect(() => {
        loadAvailableItems();
    }, []);

    return <>
        <ul id="meals">
            {availableItems.map((item) => {
                return <FoodCard key={item.id} foodItem={item}/>
            })}
        </ul>
    </>
}