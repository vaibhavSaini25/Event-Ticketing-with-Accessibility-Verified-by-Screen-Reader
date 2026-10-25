import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import events from "../data/events";

function SeatSelection() {

  const { id } = useParams();

  const event = events.find(
    (event) => event.id === Number(id)
  );


  // Seats that are already booked

  const bookedSeats = [
    "A3",
    "A7",
    "B2",
    "B6",
    "C4",
    "D1",
    "D7",
    "E5"
  ];


  // Selected seats

  const [selectedSeats, setSelectedSeats] = useState([]);


  // All seats

  const rows = ["A", "B", "C", "D", "E"];

  const seatsPerRow = 8;


  // Select or remove a seat

  const handleSeatClick = (seat) => {

    if (bookedSeats.includes(seat)) {
      return;
    }

    if (selectedSeats.includes(seat)) {

      setSelectedSeats(
        selectedSeats.filter(
          (item) => item !== seat
        )
      );

    } else {

      setSelectedSeats([
        ...selectedSeats,
        seat
      ]);

    }
  };


  // Total price

  const totalPrice =
    selectedSeats.length * event.price;


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
    <div className="seat-page">

      {/* Page Heading */}

      <div className="seat-header">

        <p>SELECT YOUR SEATS</p>

        <h1>{event.title}</h1>

        <span>
          {event.date} • {event.time}
        </span>

      </div>


      {/* Main Seat Area */}

      <div className="seat-container">


        {/* Screen */}

        <div className="screen-area">

          <div className="screen">
            SCREEN
          </div>

          <p>
            All eyes this way
          </p>

        </div>


        {/* Seat Legend */}

        <div className="seat-legend">

          <div>
            <span className="legend-seat available"></span>
            Available
          </div>

          <div>
            <span className="legend-seat selected"></span>
            Selected
          </div>

          <div>
            <span className="legend-seat booked"></span>
            Booked
          </div>

        </div>


        {/* Seats */}

        <div className="seats-area">

          <h3>Regular Seats</h3>


          {rows.map((row) => (

            <div
              className="seat-row"
              key={row}
            >

              <span className="row-name">
                {row}
              </span>


              {Array.from(
                { length: seatsPerRow },
                (_, index) => {

                  const seat =
                    `${row}${index + 1}`;

                  const isBooked =
                    bookedSeats.includes(seat);

                  const isSelected =
                    selectedSeats.includes(seat);


                  return (
                    <button
                      key={seat}

                      className={`seat ${
                        isBooked
                          ? "booked"
                          : isSelected
                          ? "selected"
                          : "available"
                      }`}

                      onClick={() =>
                        handleSeatClick(seat)
                      }

                      disabled={isBooked}

                      aria-label={`Seat ${seat}`}
                    >
                      {index + 1}
                    </button>
                  );

                }
              )}

            </div>

          ))}

        </div>


        {/* Booking Summary */}

        <div className="seat-summary">

          <div className="summary-left">

            <p>Selected Seats</p>

            {selectedSeats.length === 0 ? (

              <h3>No seats selected</h3>

            ) : (

              <div className="selected-list">

                {selectedSeats.map((seat) => (
                  <span key={seat}>
                    {seat}
                  </span>
                ))}

              </div>

            )}

          </div>


          <div className="summary-middle">

            <p>Tickets</p>

            <h3>
              {selectedSeats.length}
            </h3>

          </div>


          <div className="summary-price">

            <p>Total</p>

            <h2>
              ₹{totalPrice}
            </h2>

          </div>


          <Link
            to={`/checkout/${event.id}`}
            state={{
              selectedSeats: selectedSeats
            }}

            className={
              selectedSeats.length === 0
                ? "continue-btn disabled"
                : "continue-btn"
            }
          >
            Continue →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default SeatSelection;