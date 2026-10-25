import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyBookings() {

  const [bookings, setBookings] = useState([]);


  // Get bookings from localStorage

  useEffect(() => {

    const savedBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    setBookings(savedBookings);

  }, []);


  return (
    <div className="bookings-page">


      {/* Header */}

      <div className="bookings-header">

        <p>YOUR TICKETS</p>

        <h1>My Bookings</h1>

        <span>
          View all your booked events in one place.
        </span>

      </div>


      {/* Bookings */}

      <div className="bookings-container">

        {bookings.length === 0 ? (

          /* No bookings */

          <div className="no-bookings">

            <div className="empty-icon">
              🎟️
            </div>

            <h2>No Bookings Yet</h2>

            <p>
              You haven't booked any tickets yet.
            </p>

            <Link to="/events">
              Explore Events
            </Link>

          </div>

        ) : (

          /* Booking List */

          <div className="booking-list">

            {bookings.map((booking) => (

              <div
                className="booking-card"
                key={booking.bookingId}
              >


                {/* Card Top */}

                <div className="booking-card-top">

                  <div>

                    <span className="booking-label">
                      BOOKING ID
                    </span>

                    <strong>
                      {booking.bookingId}
                    </strong>

                  </div>

                  <span className="confirmed-badge">
                    ✓ Confirmed
                  </span>

                </div>


                {/* Event */}

                <div className="booking-event">

                  <div className="event-icon">
                    🎬
                  </div>

                  <div>

                    <h2>
                      {booking.eventName}
                    </h2>

                    <p>
                      {booking.venue}
                    </p>

                  </div>

                </div>


                {/* Details */}

                <div className="booking-details">


                  <div>

                    <span>📅 Date</span>

                    <strong>
                      {booking.date}
                    </strong>

                  </div>


                  <div>

                    <span>🕐 Time</span>

                    <strong>
                      {booking.time}
                    </strong>

                  </div>


                  <div>

                    <span>💺 Seats</span>

                    <strong>
                      {booking.seats.join(", ")}
                    </strong>

                  </div>


                  <div>

                    <span>🎟️ Tickets</span>

                    <strong>
                      {booking.seats.length}
                    </strong>

                  </div>


                </div>


                {/* Bottom */}

                <div className="booking-card-bottom">

                  <div>

                    <span>Total Amount</span>

                    <strong>
                      ₹{booking.total}
                    </strong>

                  </div>

                  <span className="payment-status">
                    Paid via {booking.paymentMethod}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyBookings;