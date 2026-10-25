import { useState } from "react";
import { Link } from "react-router-dom";
import events from "../data/events";

function Events() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Music",
    "Movies",
    "Sports",
    "Comedy",
    "Theatre"
  ];

  const filteredEvents = events.filter((event) => {

    const matchesSearch =
      event.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="events-page">

      {/* Header */}

      <section className="events-header">

        <div>
          <span className="events-label">
            DISCOVER EVENTS
          </span>

          <h1>
            Find Your Next
            <br />
            <span>Experience.</span>
          </h1>

          <p>
            Explore amazing events and book
            your perfect seats.
          </p>
        </div>


        {/* Search */}

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </section>


      {/* Categories */}

      <section className="category-section">

        <div className="category-buttons">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>

      </section>


      {/* Events */}

      <section className="events-content">

        <div className="events-title-row">

          <div>
            <span className="small-heading">
              AVAILABLE NOW
            </span>

            <h2>
              Popular Events
            </h2>
          </div>

          <span className="event-count">
            {filteredEvents.length} Events
          </span>

        </div>


        {filteredEvents.length === 0 ? (

          <div className="no-events">

            <div>😕</div>

            <h2>
              No events found
            </h2>

            <p>
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="event-grid">

            {filteredEvents.map((event) => (

              <div
                className="event-card"
                key={event.id}
              >

                {/* Image */}

                <div className="event-image-wrapper">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />

                  <span className="event-category">
                    {event.category}
                  </span>

                  <span className="event-rating">
                    ⭐ {event.rating}
                  </span>

                </div>


                {/* Content */}

                <div className="event-card-content">

                  <h3>
                    {event.title}
                  </h3>


                  <div className="event-info">

                    <div>
                      📅 {event.date}
                    </div>

                    <div>
                      📍 {event.venue}
                    </div>

                  </div>


                  <div className="event-card-footer">

                    <div>

                      <span>
                        Starting from
                      </span>

                      <strong>
                        ₹{event.price}
                      </strong>

                    </div>


                    <Link
                      to={`/events/${event.id}`}
                      className="view-event-btn"
                    >
                      View Details →
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Events;