// components/ItemsList.js
"use client";
import { fetchItems } from "../../lib/api";
import Link from "next/link";

export default async function ItemsList() {
    console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
    const items = await fetchItems();

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {items.map((item: any) => (
                <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                    <Link href={`/items/${item.id}`}><h1>{item.name}</h1></Link>
                    <h2>{item.description}</h2>
                    <img src={item.image} alt={item.name} style={{ width: "100%" }} />
                </div>
            ))}
        </div>
    );
}


