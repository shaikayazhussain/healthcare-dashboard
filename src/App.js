// src/App.js

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.js'; // Ensure .js extension if your files are .js
import Header from './components/Header/Header.js';    // Ensure .js extension if your files are .js
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent.js'; // Ensure .js extension if your files are .js
import './App.css'; // Your main application CSS

function App() {
  return (
    <div className="app-container"> {/* This div is styled in App.css to be a flex container */}
      <Sidebar /> {/* Your sidebar component */}
      <div className="main-content"> {/* This div is styled in App.css to take remaining space and stack children */}
        <Header /> {/* Your header component */}
        <DashboardMainContent /> {/* Your main dashboard content component */}
      </div>
    </div>
  );
}

export default App;