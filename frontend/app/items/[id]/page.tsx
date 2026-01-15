
import { fetchItemById } from "../../../lib/api";
// import Image from "next/image";

interface Props {
    params: { id: string };
}

export default async function ItemDetail({ params }: Props) {
    // если используется новый Next.js, нужно распаковать params через await
    const { id } = await params; // <- вот здесь важно

    const item = await fetchItemById(id);

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto" }}>
            <h1>{item.name}</h1>

            {/* <Image
                src={item.image}
                alt={item.name}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
            /> */}

            <p>{item.description}</p>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
        </div>
    );
}
