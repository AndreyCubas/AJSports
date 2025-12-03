import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Contato from "../pages/contact/contato";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Cart from "../pages/carrinho/carrinho";
import Catalogo from "../pages/catalogo/catalogo";
import Home from "../pages/home/home";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/carrinho" element={<Cart/>}/>
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}
