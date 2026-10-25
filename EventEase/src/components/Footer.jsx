import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">

      {/* Main Footer */}

      <div className="footer-content">

        {/* Brand */}

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            🎟️ Event<span>Ease</span>
          </Link>

          <p>
            Your gateway to unforgettable
            experiences. Discover events,
            choose your seats, and book
            with ease.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

          </div>

        </div>


        {/* Quick Links */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/my-bookings">
            My Bookings
          </Link>

          <Link to="/about">
            About Us
          </Link>

        </div>


        {/* Categories */}

        <div className="footer-column">

          <h3>
            Categories
          </h3>

          <Link to="/events">
            Music
          </Link>

          <Link to="/events">
            Movies
          </Link>

          <Link to="/events">
            Sports
          </Link>

          <Link to="/events">
            Comedy
          </Link>

        </div>


        {/* Contact */}

        <div className="footer-column">

          <h3>
            Contact
          </h3>

          <p>
            📍 Chandigarh, India
          </p>

          <p>
            ✉️ support@eventease.com
          </p>

          <p>
            ☎️ +91 98765 43210
          </p>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <span>
          © 2026 EventEase. All rights reserved.
        </span>

        <span>
          Made for better event experiences.
        </span>

      </div>

    </footer>
  );
}

export default Footer;