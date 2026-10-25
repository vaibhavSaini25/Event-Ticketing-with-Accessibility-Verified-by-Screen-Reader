import { Link, useLocation, useParams } from "react-router-dom";

function BookingConfirmation() {

  const { bookingId } = useParams();

  const location = useLocation();

  const booking = location.state?.booking;

  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="success-label">
          BOOKING CONFIRMED
        </span>

        <h1>
          You're All Set!
        </h1>

        <p>
          Your event ticket has been successfully booked.
        </p>

        <div className="booking-id">

          <span>
            Booking ID
          </span>

          <strong>
            {bookingId}
          </strong>

        </div>

        {booking && (

          <div className="confirmation-details">

            <div>
              <span>Event</span>
              <strong>
                {booking.eventTitle}
              </strong>
            </div>

            <div>
              <span>Date</span>
              <strong>
                {booking.date}
              </strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>
                {booking.seats.join(", ")}
              </strong>
            </div>

            <div>
              <span>Total Paid</span>
              <strong>
                ₹{booking.totalPrice}
              </strong>
            </div>

          </div>

        )}

        <div className="confirmation-buttons">

          <Link
            to="/my-bookings"
            className="primary-confirmation-btn"
          >
            View My Bookings
          </Link>

          <Link
            to="/events"
            className="secondary-confirmation-btn"
          >
            Explore More Events
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BookingConfirmation;