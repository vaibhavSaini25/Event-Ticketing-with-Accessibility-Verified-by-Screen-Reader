import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import events from "../data/events";

function Checkout() {

  const { id } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const event = events.find(
    (event) => event.id === Number(id)
  );

  const selectedSeats =
    location.state?.selectedSeats || [];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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

  if (selectedSeats.length === 0) {
    return (
      <div className="not-found">

        <h2>No Seats Selected</h2>

        <p>
          Please select your seats first.
        </p>

        <Link to={`/events/${event.id}/seats`}>
          Select Seats
        </Link>

      </div>
    );
  }

  const totalPrice =
    selectedSeats.length * event.price;

  const handleBooking = (e) => {

    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all details.");
      return;
    }

    const bookingId =
      "EE" + Date.now();

    const booking = {
      bookingId: bookingId,
      eventId: event.id,
      eventTitle: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      seats: selectedSeats,
      tickets: selectedSeats.length,
      totalPrice: totalPrice,
      customerName: name,
      customerEmail: email,
      customerPhone: phone
    };

    const oldBookings =
      JSON.parse(
        localStorage.getItem("eventEaseBookings")
      ) || [];

    localStorage.setItem(
      "eventEaseBookings",
      JSON.stringify([
        ...oldBookings,
        booking
      ])
    );

    navigate(
      `/booking-confirmation/${bookingId}`,
      {
        state: {
          booking: booking
        }
      }
    );
  };

  return (
    <div className="checkout-page">

      <div className="checkout-header">

        <span>
          COMPLETE YOUR BOOKING
        </span>

        <h1>
          Checkout
        </h1>

        <p>
          Enter your details to confirm your tickets.
        </p>

      </div>

      <div className="checkout-container">

        <form
          className="checkout-form"
          onSubmit={handleBooking}
        >

          <div className="checkout-card">

            <h2>
              Your Information
            </h2>

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

            </div>

          </div>

          <button
            type="submit"
            className="confirm-booking-btn"
          >
            Confirm Booking →
          </button>

        </form>

        <div className="order-summary">

          <h2>
            Booking Summary
          </h2>

          <div className="summary-event">

            <img
              src={event.image}
              alt={event.title}
            />

            <div>

              <span>
                {event.category}
              </span>

              <h3>
                {event.title}
              </h3>

            </div>

          </div>

          <div className="checkout-info">

            <div>
              <span>Date</span>
              <strong>{event.date}</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>{event.time}</strong>
            </div>

            <div>
              <span>Venue</span>
              <strong>{event.venue}</strong>
            </div>

          </div>

          <div className="checkout-seats">

            <span>
              Selected Seats
            </span>

            <div>

              {selectedSeats.map((seat) => (
                <span key={seat}>
                  {seat}
                </span>
              ))}

            </div>

          </div>

          <div className="checkout-total">

            <span>
              {selectedSeats.length} Ticket(s)
            </span>

            <strong>
              ₹{totalPrice}
            </strong>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;