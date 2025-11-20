import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

type CartItem = {
  id: number;
  name: string;
  team: string;
  price: number;
  quantity: number;
  image: string;
};

const mockCart: CartItem[] = [
  {
    id: 1,
    name: "Camisa Oficial 2025",
    team: "Flamengo",
    price: 269.99,
    quantity: 1,
    image: "../../camisas/Camisas jogador/Flamengo l 25-26/202502201322031.jpg"
  },
  {
    id: 2,
    name: "Camisa Treino 2025",
    team: "São Paulo",
    price: 159.99,
    quantity: 2,
    image: "../../assets/sao-paulo-2025.png"
  },
];

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(mockCart);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantity = (id: number, amount: number) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  return (
    <section className="mx-auto p-6 ml-12 bg-white shadow-lg rounded-lg border">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">
        <FaShoppingCart className="inline-block mr-2" />
      </h2>
      <div className="md:flex md:gap-10">
        <div className="md:w-2/3 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="text-gray-600 text-lg">Seu carrinho está vazio.</div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.team}
                  className="w-40 h-40 object-cover rounded bg-gray-200"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-xl">{item.name}</h4>
                  <span className="text-gray-600">{item.team}</span>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      type="button"
                      className="px-2 text-xl font-bold bg-blue-100 text-blue-800 rounded"
                      onClick={() => handleQuantity(item.id, -1)}
                    >-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      className="px-2 text-xl font-bold bg-blue-100 text-blue-800 rounded"
                      onClick={() => handleQuantity(item.id, 1)}
                    >+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-blue-800">
                    R$ {item.price.toFixed(2)}
                  </span>
                  <button
                    className="text-red-500 hover:underline mt-2 text-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className="md:w-1/3 border-l pl-6 flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Resumo do Pedido</h3>
          <div className="flex justify-between">
            <span className="text-gray-700">Total</span>
            <span className="text-lg font-bold text-blue-800">
              R$ {getTotal().toFixed(2)}
            </span>
          </div>
          <button
            className="mt-4 bg-blue-700 text-white font-semibold py-3 px-8 rounded hover:bg-blue-800 duration-200 disabled:bg-blue-400"
            disabled={cart.length === 0}
          >
            Finalizar Compra
          </button>
          <span className="text-sm text-gray-500">
            Frete e descontos serão calculados no checkout.
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
