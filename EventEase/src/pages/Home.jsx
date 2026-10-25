import { Link } from "react-router-dom";
import events from "../data/events";

function Home() {

  const featuredEvents = events.slice(0, 3);

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-label">
            YOUR NEXT EXPERIENCE AWAITS
          </span>

          <h1>
            Discover.
            <br />
            <span>Experience.</span>
            <br />
            Remember.
          </h1>

          <p>
            Find the best events around you,
            choose your perfect seat,
            and book your tickets with ease.
          </p>

          <div className="hero-buttons">

            <Link
              to="/events"
              className="hero-primary-btn"
            >
              Explore Events →
            </Link>

            <Link
              to="/about"
              className="hero-secondary-btn"
            >
              Learn More
            </Link>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="floating-card card-one">
            🎵
            <div>
              <strong>Live Music</strong>
              <span>Feel the energy</span>
            </div>
          </div>


          <div className="hero-ticket">

            <div className="ticket-top">

              <span>EVENTEASE</span>

              <span>🎟️</span>

            </div>

            <div className="ticket-main">

              <small>FEATURED EVENT</small>

              <h2>
                Your Next
                <br />
                Great Memory
              </h2>

              <p>
                Book your experience today.
              </p>

            </div>

            <div className="ticket-line"></div>

            <div className="ticket-bottom">

              <span>EVENTEASE</span>

              <span>2026</span>

            </div>

          </div>


          <div className="floating-card card-two">
            ⭐
            <div>
              <strong>Top Rated</strong>
              <span>4.9 / 5 rating</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= QUICK STATS ================= */}

      <section className="home-stats">

        <div>
          <strong>100+</strong>
          <span>Events</span>
        </div>

        <div>
          <strong>5K+</strong>
          <span>Happy Users</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Venues</span>
        </div>

        <div>
          <strong>4.8</strong>
          <span>Average Rating</span>
        </div>

      </section>


      {/* ================= FEATURED EVENTS ================= */}

      <section className="featured-section">

        <div className="section-heading">

          <div>

            <span>
              DON'T MISS OUT
            </span>

            <h2>
              Featured Events
            </h2>

          </div>

          <Link to="/events">
            View All Events →
          </Link>

        </div>


        <div className="featured-grid">

          {featuredEvents.map((event) => (

            <div
              className="featured-card"
              key={event.id}
            >

              <div className="featured-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <span>
                  ⭐ {event.rating}
                </span>

              </div>


              <div className="featured-content">

                <small>
                  {event.category}
                </small>

                <h3>
                  {event.title}
                </h3>

                <p>
                  📅 {event.date}
                </p>

                <div>

                  <strong>
                    ₹{event.price}
                  </strong>

                  <Link
                    to={`/events/${event.id}`}
                  >
                    View →
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="categories-section">

        <div className="section-heading">

          <div>

            <span>
              EXPLORE BY TYPE
            </span>

            <h2>
              What Are You Into?
            </h2>

          </div>

        </div>


        <div className="category-grid">

          <Link
            to="/events"
            className="home-category music"
          >
            <span>🎵</span>
            <h3>Music</h3>
            <p>Concerts & live shows</p>
          </Link>


          <Link
            to="/events"
            className="home-category movie"
          >
            <span>🎬</span>
            <h3>Movies</h3>
            <p>Big screen experiences</p>
          </Link>


          <Link
            to="/events"
            className="home-category sports"
          >
            <span>🏆</span>
            <h3>Sports</h3>
            <p>Feel the competition</p>
          </Link>


          <Link
            to="/events"
            className="home-category comedy"
          >
            <span>😂</span>
            <h3>Comedy</h3>
            <p>Laugh out loud</p>
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div>

          <span>
            READY FOR YOUR NEXT EXPERIENCE?
          </span>

          <h2>
            Your perfect event
            <br />
            is waiting.
          </h2>

          <p>
            Explore our collection of events
            and book your seats today.
          </p>

        </div>


        <Link
          to="/events"
          className="cta-button"
        >
          Browse All Events →
        </Link>

      </section>

    </div>
  );
}

export default Home;