// src/components/DashboardMainContent/DashboardMainContent.js

import React from "react";

import AnatomySection from "../AnatomySection/AnatomySection.js";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards.js";
import CalendarView from "../CalendarView/CalendarView.js";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule.js";
import ActivityFeed from "../ActivityFeed/ActivityFeed.js";

import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      {/* This is the LEFT column/section */}
      <div className="dashboard-left">
        <AnatomySection />
        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>

      {/* This is the RIGHT column/section */}
      <div className="dashboard-right">
        <HealthStatusCards />
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;