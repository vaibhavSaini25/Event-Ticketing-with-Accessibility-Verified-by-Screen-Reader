import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">

      <img
        src={event.image}
        alt={event.title}
        className="event-image"
      />

      <div className="event-content">

        <div className="event-category">
          {event.category}
        </div>

        <h3>{event.title}</h3>

        <p className="event-info">
          📅 {event.date}
        </p>

        <p className="event-info">
          🕐 {event.time}
        </p>

        <p className="event-info">
          📍 {event.venue}
        </p>

        <div className="event-bottom">

          <div>
            <span className="rating">
              ⭐ {event.rating}
            </span>

            <span className="price">
              ₹{event.price}
            </span>
          </div>

          <Link
            to={`/events/${event.id}`}
            className="details-btn"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EventCard;