import type { ReactNode } from "react";
import type { Item } from "../types";
export function Table({ items }: { items: Item[], children?: ReactNode }) {
    return (
        <>
            <table>
                <tr>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                {items?.map((item: Item) => {
                    return (<tr>{Object.entries(item).map(([, value]) => <td>{value}</td>)}</tr>);
                })}
            </table>
        </>
    );
}