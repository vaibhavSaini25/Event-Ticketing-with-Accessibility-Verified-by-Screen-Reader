import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <span className="logo-icon">🎟️</span>

        <span>
          Event<span className="logo-highlight">Ease</span>
        </span>
      </Link>


      {/* Desktop Navigation */}

      <div
        className={
          menuOpen
            ? "nav-links mobile-open"
            : "nav-links"
        }
      >

        <NavLink
          to="/login"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Signup
      </NavLink>


        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/events"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Events
        </NavLink>


        <NavLink
          to="/my-bookings"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          My Bookings
        </NavLink>


        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

      </div>


      {/* Ticket Button */}

      <Link
        to="/events"
        className="navbar-ticket-btn"
      >
        Browse Events
      </Link>


      {/* Mobile Menu Button */}

      <button
        className="menu-button"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;