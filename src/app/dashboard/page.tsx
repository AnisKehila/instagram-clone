"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import signOut from "@/firebase/auth/signOut";
import React from "react";
function Dashboard() {
  const handleLogout = async () => {
    await signOut();
  };
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className="flex justify-between">
      <span>Dashboard</span>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Dashboard;
