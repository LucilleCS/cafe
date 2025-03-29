// Header.js
import { Link } from "react-router-dom";
import './css/Header.css'; // Import the CSS for styling your header

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
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
