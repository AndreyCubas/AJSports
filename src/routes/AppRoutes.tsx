import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contact from "../pages/contact/contato";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import SidebarTest from "../test/Sidebar/SidebarTest";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/c" element={<SidebarTest/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}
