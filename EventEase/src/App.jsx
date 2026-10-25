import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import SeatSelection from "./pages/SeatSelection";
import Checkout from "./pages/Checkout";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBookings from "./pages/MyBookings";
import About from "./pages/About";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route
  path="/"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

<Route
  path="/events"
  element={
    <ProtectedRoute>
      <Events />
    </ProtectedRoute>
  }
/>

<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/events/:id"
          element={<EventDetails />}
        />

        <Route
          path="/events/:id/seats"
          element={<SeatSelection />}
        />

        <Route
          path="/checkout/:id"
          element={<Checkout />}
        />

        <Route
          path="/booking-confirmation/:bookingId"
          element={<BookingConfirmation />}
        />

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      <Footer />

    </>
  );
}

export default App;