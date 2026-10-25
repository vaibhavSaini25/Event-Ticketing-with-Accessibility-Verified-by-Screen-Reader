import { Link, useParams } from "react-router-dom";
import events from "../data/events";

function EventDetails() {

  const { id } = useParams();

  const event = events.find(
    (event) => event.id === Number(id)
  );

  if (!event) {
    return (
      <div className="not-found">
        <h2>Event Not Found</h2>

        <Link to="/events">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* Event Image */}

      <div className="details-image-container">

        <img
          src={event.image}
          alt={event.title}
          className="details-image"
        />

      </div>


      {/* Event Information */}

      <div className="details-content">

        <span className="details-category">
          {event.category}
        </span>

        <h1>{event.title}</h1>

        <div className="details-rating">
          ⭐ {event.rating} / 5
        </div>

        <p className="details-description">
          {event.description}
        </p>


        <div className="details-info">

          <div className="info-box">
            <span>📅</span>

            <div>
              <small>Date</small>
              <strong>{event.date}</strong>
            </div>
          </div>


          <div className="info-box">
            <span>🕐</span>

            <div>
              <small>Time</small>
              <strong>{event.time}</strong>
            </div>
          </div>


          <div className="info-box">
            <span>📍</span>

            <div>
              <small>Venue</small>
              <strong>{event.venue}</strong>
            </div>
          </div>

        </div>


        {/* Booking Section */}

        <div className="booking-box">

          <div>
            <p>Ticket Price</p>

            <h2>₹{event.price}</h2>
          </div>

          <Link
            to={`/events/${event.id}/seats`}
            className="select-seat-btn"
          >
            Select Seats →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;