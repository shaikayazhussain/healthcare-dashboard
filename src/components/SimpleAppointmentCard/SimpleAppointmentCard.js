import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ day, title, time }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-day">{day}</p>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
