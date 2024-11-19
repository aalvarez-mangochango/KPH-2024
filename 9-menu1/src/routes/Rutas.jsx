import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../components/Navbar"
import { Products } from "../pages/Product";
import { Reports } from "../pages/Reports";

export function MyRoutes() {
  return (
    <Router>
        <NavBar  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
