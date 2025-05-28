// src/components/CalendarView/CalendarView.js

import React from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const datesWithAppointments = new Set([
    25,
    27
  ]);

  const appointmentTimes = {
      25: '09:00',
      27: '11:00'
  };

  const daysInMonth = 31; // For October, for example
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-header">
        {weekdays.map(day => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="calendar-grid">
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = index + 1;
          const hasAppointment = datesWithAppointments.has(date);

          return (
            <div
              key={index}
              className={`calendar-cell ${hasAppointment ? 'has-appointment' : ''}`}
            >
              <span>{date}</span>
              <div className="appointment-indicator">
                {hasAppointment && (
                  <span>{appointmentTimes[date]}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;