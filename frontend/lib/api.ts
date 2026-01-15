// // lib/api.ts
// export const API_URL = process.env.NEXT_PUBLIC_API_UR || "http://localhost:8001/api";

// export async function fetchItems() {
//     console.log("API_URL =", API_URL);
//     const res = await fetch(`${API_URL}/items/`);
//     if (!res.ok) throw new Error("Ошибка загрузки items");
//     return res.json();
// }

// export async function fetchItemById(id: string) {
//     console.log("API_URL =", API_URL);
//     const res = await fetch(`${API_URL}/items/${id}/`, {
//         cache: "no-store",
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch item");
//     }

//     return res.json();
// }


// lib/api.ts

// Правильный выбор API URL в зависимости от окружения
export const API_URL =
    typeof window === "undefined" // если код выполняется на сервере (SSR)
        ? process.env.INTERNAL_API_URL // для контейнера / Node
        : process.env.NEXT_PUBLIC_API_URL; // для браузера

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
    if (!res.ok) throw new Error("Ошибка загрузки item");
    return res.json();
}

// export function getImageUrl(path: string) {
//     if (!path) return "";
//     if (path.startsWith("http")) return path; // полный URL уже
//     const base = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:8001";
//     return `${base}${path}`;
// }

// export function getImageUrl(path: string) {
//     if (!path) return "";
//     if (path.startsWith("http")) return path; // полный URL уже
//     const base = (typeof window === "undefined"
//         ? process.env.INTERNAL_API_URL
//         : process.env.NEXT_PUBLIC_API_URL
//     )?.replace("/api", "") || "http://localhost:8001";
//     return `${base}${path}`;
// }
// export function getImageUrl(path: string) {
//     if (!path) return "";
//     if (path.startsWith("http")) return path;

//     // Используем публичный URL, который доступен браузеру
//     const base = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:8001";

//     return `${base}${path}`;
// }

export function getImageUrl(path: string) {
    if (!path) return "";
    if (path.startsWith("http")) return path;

    // Если в браузере — используем публичный API URL
    if (typeof window !== "undefined") {
        return (process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:8001") + path;
    }

    // Если на сервере (SSR) — тоже используем публичный URL фронтенда
    return (process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:8001") + path;
}

// export function getImageUrl(path: string) {
//     if (!path) return "";
//     if (path.startsWith("http")) return path; // полный URL уже

//     // Используем публичный URL фронтенда, доступный браузеру
//     const base = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:8001";

//     return `${base}${path}`;
// }
