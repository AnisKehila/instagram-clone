import signOut from "../firebase/auth/signOut";
import React from "react";

function Dashboard() {
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="flex justify-between">
      <span>Dashboard</span>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Dashboard;
