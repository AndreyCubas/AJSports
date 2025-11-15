import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Contact from "../pages/contact/contato";
import SignIn from "../pages/signin/signin";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/contact" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
