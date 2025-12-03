import React from "react";

type Shirt = {
  id: number;
  name: string;
  team: string;
  price: number;
  images: string[];
};

type Props = {
  item: Shirt;
};

const ShirtCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow bg-white cursor-pointer mb-5 w-[325px] min-w-[250px]">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h3 className="text-lg font-semibold mt-3 line-clamp-2">{item.name}</h3>
      <p className="text-gray-600">{item.team}</p>

      <p className="text-blue-700 font-bold text-xl mt-2">
        R$ {item.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ShirtCard;
