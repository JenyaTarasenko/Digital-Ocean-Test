// lib/api.ts
export const API_URL = process.env.NEXT_PUBLIC_API_UR || "http://localhost:8001/api";

export async function fetchItems() {
    console.log("API_URL =", API_URL);
    const res = await fetch(`${API_URL}/items/`);
    if (!res.ok) throw new Error("Ошибка загрузки items");
    return res.json();
}

export async function fetchItemById(id: string) {
    console.log("API_URL =", API_URL);
    const res = await fetch(`${API_URL}/items/${id}/`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch item");
    }

    return res.json();
}
