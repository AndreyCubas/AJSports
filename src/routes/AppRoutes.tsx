import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Login/Login";
import Register from "react-router-dom";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/contact" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}
