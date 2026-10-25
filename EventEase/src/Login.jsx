
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
function handleLogin(e) {
  e.preventDefault();

  const users = JSON.parse(
    localStorage.getItem("eventease-users") || "[]"
  );

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  // Add these lines after successful login
  localStorage.setItem(
    "eventease-current-user",
    JSON.stringify({
      name: user.name,
      email: user.email
    })
  );

  navigate("/");
}


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        <p>Login to your EventEase account.</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
