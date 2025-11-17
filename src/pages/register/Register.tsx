import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { InputFloat } from "../../components/InputFloat";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.firstName || !form.lastName|| !form.email || !form.password) {
      setError("Por favor, preencha os campos.");
      return;
    }
    setError("");
    setLoading(true);

    console.log("Enviando dados de Register:", form);
    setTimeout(() => {
      setLoading(false);
      console.log("Simulação de Register concluída.");
    }, 2000);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 my-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Register</h2>
      <div className="md:flex md:gap-10">
        <div className="md:w-1/2 space-y-4 mb-6 md:mb-0 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <FaLock className="text-5xl text-blue-700 mb-8" />
          <h3 className="text-xl font-semibold">Acesse sua Conta</h3>
          <p className="">
            Bem-vindo de volta! Faça Register para acessar seus pedidos e
            configurações.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4">
          <div>
            <InputFloat
              label="Primeiro nome"
              type="primeiro-nome"
              name="primeiro-nome"
              id="primeiro-nome"
              value={form.firstName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <InputFloat
              label="Ultimo nome"
              type="ultimo-nome"
              name="ultimo-nome"
              id="ultimo-nome"
              value={form.lastName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <InputFloat
              label="E-mail"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <InputFloat
              label="Sua senha"
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {error && <span className="text-red-600">{error}</span>}
          {loading && (
            <span className="text-blue-700">Autenticando...</span>
          )}

          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold py-2 px-48 rounded hover:bg-blue-800 duration-200 disabled:bg-blue-400"
              disabled={loading}
            >
            {loading ? "Entrando..." : "Entrar"}
            </button>

            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 hover:underline transition-colors text-sm"
            >
            Já tem uma conta? Login
            </a>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Register;