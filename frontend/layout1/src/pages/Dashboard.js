import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate=useNavigate()
  window.addEventListener('popstate',()=>{
    navigate("/dashboard")
  })
  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="mt-4">This is a private page, only accessible if you're logged in.</p>
    </div>
  );
}

export default Dashboard;
