import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/sidebar/Sidebar";

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
        <div className="p-6">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
