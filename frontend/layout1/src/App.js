import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('hit')
    setIsAuthenticated(false);
    navigate("/login");
  };
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/dashboard')
    }
  },[])
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Dashboard handleLogout={handleLogout} />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<div className="text-center">Welcome to the App</div>} />
          
          <Route path="*" element={isAuthenticated?<Navigate to="/login" />:<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
