// src/components/UpcomingSchedule/UpcomingSchedule.js

import React from 'react';
import './UpcomingSchedule.css';

// Import icons from react-icons. Remember to install react-icons: npm install react-icons
import { FaCheckCircle, FaEye, FaHeartbeat, FaBrain } from 'react-icons/fa';

const UpcomingSchedule = () => {
  const appointments = [
    {
      day: 'Thursday',
      icon: FaCheckCircle, // Example icon
      title: 'Health checkup complete',
      time: '11:00 AM',
      color: '#4CAF50'
    },
    {
      day: 'Thursday',
      icon: FaEye, // Example icon
      title: 'Ophthalmologist',
      time: '02:00 PM',
      color: '#2196F3'
    },
    {
      day: 'Saturday',
      icon: FaHeartbeat, // Example icon
      title: 'Cardiologist',
      time: '10:00 AM',
      color: '#F44336'
    },
    {
      day: 'Saturday',
      icon: FaBrain, // Example icon
      title: 'Neurologist',
      time: '04:00 PM',
      color: '#9C27B0'
    },
  ];

  return (
    <div className="upcoming-schedule">
      <h3>Upcoming Schedule</h3>
      <div className="appointments">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <div className="appointment-icon">
              <appointment.icon size={20} style={{ color: appointment.color }} />
            </div>
            <div className="appointment-details">
                <p>{appointment.title}</p>
                <span>{appointment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;