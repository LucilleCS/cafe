// Header.js
import { Link } from "react-router-dom";
import './css/Header.css'; // Import the CSS for styling your header

function Header() {
  return (
    <header>
      <nav>
        <ul id="navigation" className="columns hide-small">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Cats">Cats</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
