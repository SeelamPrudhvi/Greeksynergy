import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import Company from "./Company";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar logout={logout} />}
      <Routes>
        <Route path="/signup" element={<Signup login={login} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/company"
          element={isAuthenticated ? <Company /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
