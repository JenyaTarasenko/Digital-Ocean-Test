export const API_URL =
    typeof window === "undefined"
        ? process.env.INTERNAL_API_URL // SSR
        : process.env.NEXT_PUBLIC_API_URL; // браузер

export async function fetchItems() {
    const res = await fetch(`${API_URL}/items/`, {
        cache: "no-store", // 🔥 ОБЯЗАТЕЛЬНО
    });

    if (!res.ok) {
        throw new Error(`Ошибка API: ${res.status}`);
    }

    return res.json();
}

export async function fetchItemById(id: string) {
    console.log("API_URL =", API_URL);
    const res = await fetch(`${API_URL}/items/${id}/`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Ошибка загрузки item");
    return res.json();
}


// корректная генерация URL для картинки
export function getImageUrl(path?: string) {
    if (!path) return "";

    // если в JSON уже полный URL
    if (path.startsWith("http")) return path;

    if (typeof window === "undefined") {
        return `http://backend:8001${path}`; // SSR / Node
    }

    return `${process.env.NEXT_PUBLIC_API_URL}${path}`; // браузер
}
