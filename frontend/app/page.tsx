import ItemsList from "./items/ItemsList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Home</h1>
      <ItemsList />
    </div>
  );
}
