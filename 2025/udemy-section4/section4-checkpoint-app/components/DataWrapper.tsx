import { Table } from "../components/Table";
import { CardList } from "../components/CardList";
import { useState } from "react";
import type { Item } from "../types";

export function DataWrapper({ items }: { items: Item[] }) {
    const [mode, setMode] = useState("table");

    const handleButtonClick = () => {
        setMode(prev => {
            const newMode = prev === "table" ? "list" : "table";
            return newMode;
        })
    }

    return (
        <>
            <button onClick={handleButtonClick}>{mode === 'table' ? "Card List" : "Table"}</button>
            {mode === "table" ? <Table items={items} /> : <CardList items={items} />}
        </>
    );
}