import React from "react";
import { FaHome, FaFutbol, FaTags, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
  <aside
    className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white shadow-lg z-50 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
      <span className="text-lg font-bold tracking-wider">AJSports</span>
      <button
        className="focus:outline-none text-white text-lg"
        onClick={onClose}
        aria-label="Fechar sidebar"
      >
        ×
      </button>
    </div>
    <nav className="flex flex-col gap-3 mt-6 px-6">
      <a href="/" className="flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-700">
        <FaHome /> Início
      </a>
      <a href="/catalogo" className="flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-700">
        <FaFutbol /> Catálogo
      </a>
      <a href="/promocoes" className="flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-700">
        <FaTags /> Promoções
      </a>
      <a href="/carrinho" className="flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-700">
        <FaShoppingCart /> Carrinho
      </a>
      <a href="/sobre" className="flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-700">
        <FaInfoCircle /> Sobre
      </a>
    </nav>
    <div className="absolute bottom-0 left-0 w-full bg-blue-900 px-6 py-4">
      <p className="text-sm text-blue-200">© {new Date().getFullYear()} AJSports</p>
    </div>
  </aside>
);

export default Sidebar;
