// Navigation.jsx
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import './css/Navigation.css'; // Using your existing CSS

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="main-nav">
    <button id="menu-toggle" onClick={toggleMenu} className="menu-toggle">☰</button>
    <ul className={`columns ${menuOpen ? '' : 'hide-small'}`}>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/Reservation">Reservation</Link></li>
      <li><Link to="/Shop">Shop</Link></li>
      <li><Link to="/Menu">Menu</Link></li>
      <li><Link to="/Cats">Cats</Link></li>
      <li><Link to="/ContactUs">Contact Us</Link></li>
    </ul>
  </nav>
  );
}

export default Navigation;
