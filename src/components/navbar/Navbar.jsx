import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar__title">Math Magicians</h1>
    <div className="navbar__links">
      <Link className="navbar__links-link" to="/">
        Home
      </Link>
      |
      <Link className="navbar__links-link" to="/calculator">
        Calculator
      </Link>
      |
      <Link className="navbar__links-link" to="/quotes">
        Quotes
      </Link>
    </div>
  </nav>
);

export default Navbar;
