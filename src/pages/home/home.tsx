import { Link } from "react-router-dom";
import { shirts } from "../../data/shirts";
import ShirtCard from "../../components/shirtcard/ShirtCard";

export default function Home() {

  // Filtros (configure conforme sua necessidade)
  const europeias = shirts.filter(s => 
    ["Alemanha", "Inter de Milão", "Manchester City", "Arsenal", "Ajax"].includes(s.team)
  );

  const nacionais = shirts.filter(s =>
    ["Flamengo", "Grêmio", "Corinthians", "Palmeiras", "Atlético Mineiro"].includes(s.team)
  );

  const selecoes = shirts.filter(s =>
    ["Brasil", "Portugal", "Argentina", "Espanha", "Inglaterra"].includes(s.team)
  );

  const retros = shirts.filter(s =>
    s.name.toLowerCase().includes("retro")
  );

  return (
    <div className="p-6 flex flex-col gap-12">

      {/* --- LIGAS EUROPEIAS --- */}
      <Section
        title="Ligas Europeias"
        link="/catalogo?filtro=europa"
        data={europeias}
      />

      {/* --- LIGAS NACIONAIS --- */}
      <Section
        title="Ligas Nacionais"
        link="/catalogo?filtro=nacional"
        data={nacionais}
      />

      {/* --- SELEÇÕES --- */}
      <Section
        title="Seleções"
        link="/catalogo?filtro=selecoes"
        data={selecoes}
      />

      {/* --- RETRÔS --- */}
      <Section
        title="Retrôs"
        link="/catalogo?filtro=retro"
        data={retros}
      />

    </div>
  );
}


// 🔵 Componente reutilizável para cada categoria da Home
type SectionProps = {
  title: string;
  link: string;
  data: any[];
};

function Section({ title, link, data }: SectionProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          to={link}
          className="text-blue-700 hover:underline text-lg"
        >
          Ver tudo →
        </Link>
      </div>

      {/* Carrossel horizontal */}
    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {data.slice(0, 10).map(item => (
          <div key={item.id} className="min-w-[250px]">
            <ShirtCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
