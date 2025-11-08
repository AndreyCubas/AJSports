import React, { useState } from "react";
import { Link } from "react-router-dom";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação simples
    if (!form.name || !form.email || !form.message) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    setSubmitted(true);
    setForm(initialState);
    // Aqui integraria API ou lógica externa
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-12 bg-green shadow-lg rounded-lg bg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contato</h2>
      <div className="md:flex md:gap-10">
        <div className="md:w-1/2 space-y-4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Fale Conosco</h3>
          <p className="">Estamos prontos para tirar suas dúvidas sobre nossas camisas oficiais e personalizadas!</p>
          <div>
            <span className="block font-medium">Email:</span>
            <span>contato@camisastime.com</span>
          </div>
          <div>
            <span className="block font-medium">Telefone:</span>
            <span>(11) 99999-8888</span>
          </div>
          <div>
            <span className="block font-medium">Endereço:</span>
            <span>Rua dos Esportes, 123, São Paulo - SP</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4">
        <h2>Nome</h2>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="border p-3 rounded focus:outline-blue-500"
            value={form.name}
            onChange={handleChange}
          />
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded focus:outline-blue-500"
            value={form.email}
            onChange={handleChange}
          />
          <h2>Mensagem</h2>
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="border p-3 rounded focus:outline-blue-500 h-32"
            value={form.message}
            onChange={handleChange}
          />
          {error && <span className="text-red-600">{error}</span>}
          {submitted && (
            <span className="text-green-700">Mensagem enviada com sucesso! Entraremos em contato.</span>
          )}
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 duration-200"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
      <div className="mt-8 flex gap-6">
        <Link to="#" className="text-blue-700 hover:underline">Instagram</Link>
        <Link to="#" className="text-blue-700 hover:underline">WhatsApp</Link>
      </div>
    </section>
  );
};

export default Contact;
