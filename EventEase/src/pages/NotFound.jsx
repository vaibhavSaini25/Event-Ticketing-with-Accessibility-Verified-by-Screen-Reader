import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div className="error-page">

      <div className="error-number">
        404
      </div>

      <h1>
        Page Not Found
      </h1>

      <p>
        Sorry, the page you're looking for
        doesn't exist.
      </p>

      <Link
        to="/"
        className="error-btn"
      >
        ← Back to Home
      </Link>

    </div>
  );
}

export default NotFound;