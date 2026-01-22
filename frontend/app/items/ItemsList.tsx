import { fetchItems, getImageUrl } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";

interface Item {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default async function ItemsList() {
    let items: Item[] = [];
    try {
        items = await fetchItems();
    } catch (err) {
        console.error("Ошибка fetchItems:", err);
    }

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Image
                // картинка лежит в папке public/image/fil.jpg
                src="/image/fil.jpg"
                alt="Главная картинка"
                width={600}
                height={400}
            />
            {items.map((item: Item) => (
                <div
                    key={item.id}
                    style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
                >
                    <Link href={`/items/${item.id}`}>
                        <h2>{item.name}</h2>
                    </Link>
                    <h2>{item.description}</h2>
                    <img src={getImageUrl(item.image)} alt={item.name} />
                </div>
            ))}
        </div>
    );
}
