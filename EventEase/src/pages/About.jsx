function About() {

  return (
    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <p>ABOUT EVENTEASE</p>

        <h1>
          Making Event Booking
          <br />
          Simple & Exciting
        </h1>

        <span>
          Discover events, choose your seats,
          and book your tickets in just a few clicks.
        </span>

      </section>


      {/* About Content */}

      <section className="about-content">

        <div className="about-text">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Your gateway to unforgettable experiences.
          </h2>

          <p>
            EventEase is a simple online event
            ticket booking platform designed to
            make finding and booking events easier.
          </p>

          <p>
            From movies and concerts to sports and
            live performances, users can explore
            events, select their preferred seats,
            and confirm their booking online.
          </p>

        </div>


        <div className="about-stats">

          <div className="stat-box">

            <strong>100+</strong>

            <span>
              Events
            </span>

          </div>


          <div className="stat-box">

            <strong>5K+</strong>

            <span>
              Happy Users
            </span>

          </div>


          <div className="stat-box">

            <strong>24/7</strong>

            <span>
              Easy Booking
            </span>

          </div>


          <div className="stat-box">

            <strong>100%</strong>

            <span>
              Simple
            </span>

          </div>

        </div>

      </section>


      {/* Features */}

      <section className="about-features">

        <span className="section-label">
          WHY EVENTEASE
        </span>

        <h2>
          Everything you need to book an event.
        </h2>


        <div className="feature-grid">


          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>
              Discover Events
            </h3>

            <p>
              Browse different events and
              find something you love.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💺
            </div>

            <h3>
              Choose Your Seat
            </h3>

            <p>
              Select your preferred seat
              before confirming your ticket.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⚡
            </div>

            <h3>
              Quick Booking
            </h3>

            <p>
              Complete the booking process
              quickly and easily.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🎟️
            </div>

            <h3>
              Manage Tickets
            </h3>

            <p>
              View your previous bookings
              anytime from My Bookings.
            </p>

          </div>


        </div>

      </section>

    </div>
  );
}

export default About;