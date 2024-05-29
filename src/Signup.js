import React, { useState } from "react";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({ login }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      phone,
      profession,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("User registered successfully");
    login();
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2 style={{ paddingTop: "0" }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Profession</label>
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          >
            <option value="">Select Profession</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            <option value="Artist">Artist</option>
          </select>
        </div>
        <button type="submit">Signup</button>
        <div className="login-link">
          Already have an account?
          <Link to="/login">
            <span> Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
