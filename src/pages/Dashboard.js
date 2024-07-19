import React from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";
import { useAuth } from "../contexts/authContext";
import NoteList from "../components/NoteList";
import TaskList from "../components/TaskList";
import Analytics from "../components/Analytics";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Handle user logout
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the landing page after logout
  };

  // Check if the user is authenticated
  if (!isAuthenticated) {
    navigate("/"); // Redirect unauthenticated users to the landing page
    return null;
  }

  return (
    <div className="dashboard-page">
      <Navbar />
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard/tasks">Task List</Link>
            </li>
            <li>
              <Link to="/dashboard/notes">Notes</Link>
            </li>
            <li>
              <Link to="/dashboard/analytics">Analytics</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
