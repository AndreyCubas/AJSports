import { shirts } from "../../data/shirts";
import ShirtCard from "../../components/shirtcard/ShirtCard";

export default function Catalogo() {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shirts.map(item => (
        <ShirtCard key={item.id} item={item} />
      ))}
    </section>
  );
}
