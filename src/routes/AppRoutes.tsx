import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../pages/contact/contato";
import SignIn from "../pages/signin/signin";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/src/pages/login" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}
