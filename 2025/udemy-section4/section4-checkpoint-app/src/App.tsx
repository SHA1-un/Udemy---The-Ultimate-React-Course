import './App.css'
import type { Item } from "../types";
import { DataWrapper } from "../components/DataWrapper"

// Array of test items
const testItems: Item[] = [
   {
        sku: "SKU-001",
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with adjustable DPI settings.",
        price: 29.99
    },
    {
        sku: "SKU-002",
        name: "Mechanical Keyboard",
        description: "RGB backlit mechanical keyboard with blue switches.",
        price: 79.99
    },
    {
        sku: "SKU-003",
        name: "USB-C Charger",
        description: "Fast charging 65W USB-C charger compatible with laptops and phones.",
        price: 39.99
    },
    {
        sku: "SKU-004",
        name: "Noise-Cancelling Headphones",
        description: "Over-ear headphones with active noise cancellation and 30-hour battery life.",
        price: 129.99
    },
    {
        sku: "SKU-005",
        name: "4K Monitor",
        description: "27-inch 4K UHD monitor with HDR support and thin bezels.",
        price: 349.99
    }
];

function App() {
  return (
    <>
     <DataWrapper items={testItems}/>
    </>
  )
}

export default App
