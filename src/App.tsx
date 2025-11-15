import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 bg-gray-100">
        <button
          className="m-4 px-3 py-2 hover:bg-blue-800 text-black hover:text-white rounded shadow focus:outline-none text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        {/* Seu parágrafo de exemplo */}
        <div className="p-6">
          <p className="text-lg mb-6">
            Bem-vindo ao site oficial da Camisaria FC! Aqui você encontra as melhores camisas de time, promoções e novidades do futebol.
          </p>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
