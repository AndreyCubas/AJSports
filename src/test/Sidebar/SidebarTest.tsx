// SidebarTest.tsx
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const SidebarTest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="m-4 px-4 py-2 bg-blue-700 text-white rounded"
      >
        Abrir Sidebar
      </button>


      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Página de Teste</h1>
        <p className="mt-2 text-gray-600">
          Aqui você consegue testar a abertura e fechamento da sidebar.
        </p>
      </div>
    </div>
  );
};

export default SidebarTest;
