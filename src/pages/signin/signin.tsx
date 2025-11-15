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
    <></>
  );
};

export default SignIn;