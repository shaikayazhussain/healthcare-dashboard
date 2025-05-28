// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

// You would typically import icons from a library like react-icons
// import { MdDashboard, MdHistory, MdCalendarToday, MdPeople, MdMessage, MdSettings, MdLogout } from 'react-icons/md';

// Placeholder for an icon component if you don't use a library yet
const Icon = ({ children }) => <span className="nav-icon">{children}</span>;

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        Healthcare {/* Changed from My<span>App</span> to Healthcare */}
      </div>
      <nav>
        <ul className="nav-list">
          <div className="nav-section top-nav-section">
            <li className="nav-item active"> {/* Add 'active' class for the default selected item */}
              <Icon>📊</Icon> {/* Replace with actual icon component like <MdDashboard /> */}
              Dashboard
            </li>
            <li className="nav-item">
              <Icon>📜</Icon> {/* Replace with actual icon component like <MdHistory /> */}
              History
            </li>
            <li className="nav-item">
              <Icon>🗓️</Icon> {/* Replace with actual icon component like <MdCalendarToday /> */}
              Calendar
            </li>
            <li className="nav-item">
              <Icon>👥</Icon> {/* Replace with actual icon component like <MdPeople /> */}
              Patients
            </li>
            <li className="nav-item">
              <Icon>✉️</Icon> {/* Replace with actual icon component like <MdMessage /> */}
              Messages
            </li>
            <li className="nav-item">
              <Icon>⚙️</Icon> {/* Replace with actual icon component like <MdSettings /> */}
              Settings
            </li>
          </div>
          <div className="nav-section bottom-nav-section">
            <li className="nav-item logout-item">
              <Icon>➡️</Icon> {/* Replace with actual icon component like <MdLogout /> */}
              Logout
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;