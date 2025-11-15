import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

type FormState = {
  email: string;
  password: string;
};

const initialState: FormState = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setError("Por favor, preencha e-mail e senha.");
      return;
    }
    setError("");
    setLoading(true);

    console.log("Enviando dados de login:", form);
    setTimeout(() => {
      setLoading(false);
      console.log("Simulação de login concluída.");
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Login</h2>
      <div className="md:flex md:gap-10">
        
        <div className="md:w-1/2 space-y-4 mb-6 md:mb-0 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <FaLock className="text-5xl text-blue-700 mb-4" />
          <h3 className="text-xl font-semibold">Acesse sua Conta</h3>
          <p className="">
            Bem-vindo de volta! Faça login para acessar seus pedidos e
            configurações.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="seu@email.com"
              className="border p-3 rounded focus:outline-blue-500 w-full"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              className="border p-3 rounded focus:outline-blue-500 w-full"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <span className="text-red-600">{error}</span>}
          {loading && (
            <span className="text-blue-700">Autenticando...</span>
          )}
          
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 duration-200 disabled:bg-blue-400"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center text-center">
        <a
          href="#"
          className="text-blue-700 hover:text-blue-900 hover:underline transition-colors"
        >
          Esqueceu sua senha?
        </a>
        <a
          href="#"
          className="text-blue-700 hover:text-blue-900 hover:underline transition-colors"
        >
          Não tem uma conta? Cadastre-se
        </a>
      </div>
    </section>
  );
};

export default SignIn;