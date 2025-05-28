// src/components/ActivityFeed/ActivityFeed.js

import React from "react";
import "./ActivityFeed.css";

const ActivityFeed = () => {
  const activityData = [60, 40, 70, 50]; // Heights of bars in percentage

  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>
      <div className="activity-chart">
        {activityData.map((height, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${height}%`, // Dynamically set bar height
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;