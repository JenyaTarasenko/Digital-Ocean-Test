// // components/ItemsList.js
// "use client";
// import { fetchItems } from "../../lib/api";
// import Link from "next/link";

// export default async function ItemsList() {
//     console.log("API_URL =", process.env.NEXT_PUBLIC_API_URL);
//     const items = await fetchItems();

//     return (
//         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//             {items.map((item: any) => (
//                 <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
//                     <Link href={`/items/${item.id}`}><h1>{item.name}</h1></Link>
//                     <h2>{item.description}</h2>
//                     <img src={item.image} alt={item.name} style={{ width: "100%" }} />
//                 </div>
//             ))}
//         </div>
//     );
// }

'use client'; // ❗ обязательно, чтобы это был Client Component

import { useEffect, useState } from "react";
import { getImageUrl } from "../../lib/api";
import Link from "next/link";

export default function ItemsList() {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function loadItems() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/`);
                if (!res.ok) throw new Error("Ошибка загрузки items");
                const data = await res.json();
                setItems(data);
            } catch (err: any) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadItems();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {items.map(item => (
                <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                    {/* <h1>{item.name}</h1> */}
                    <Link className="text-blue-500 hover:text-blue-600" href={`/items/${item.id}`}><h1>{item.name}</h1></Link>
                    <h2>{item.description}</h2>
                    <img src={getImageUrl(item.image)} alt={item.name} />

                    {/* 
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`}
                        alt={item.name}
                        style={{ width: "100%" }}
                    /> */}
                </div>
            ))}
        </div>
    );
}

