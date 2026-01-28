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


// lib/api.ts
export function getImageUrl(path?: string) {
    if (!path) return "";

    // Находим, где начинается путь /media/
    const mediaIndex = path.indexOf('/media/');
    if (mediaIndex === -1) return path; // если /media/ нет, возвращаем как есть

    // Вырезаем всё, что ДО /media/ (убираем http://0.0.0.0:8001)
    const cleanPath = path.substring(mediaIndex);

    // В браузере нам не нужен хост, если фронт и бэк на одном домене/порту 80
    if (typeof window !== "undefined") {
        // Вернет просто "/media/images/__90.jpeg"
        // Браузер сам добавит http://localhost к этому пути
        return cleanPath;
    }

    // Для SSR (серверной части Next.js)
    return `http://backend:8001${cleanPath}`;
}

// // корректная генерация URL для картинки
// export function getImageUrl(path?: string) {
//     if (!path) return "";

//     // если в JSON уже полный URL
//     if (path.startsWith("http")) return path;

//     if (typeof window === "undefined") {
//         return `http://backend:8001${path}`; // SSR / Node
//     }

//     return `${process.env.NEXT_PUBLIC_API_URL}${path}`; // браузер
// }
