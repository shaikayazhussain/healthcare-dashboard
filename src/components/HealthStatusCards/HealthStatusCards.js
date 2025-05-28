// src/components/HealthStatusCards/HealthStatusCards.js

import React from 'react';
import './HealthStatusCards.css';
import lungsImage from '../../assets/images/lungs.png'; // <-- CORRECTED PATH HERE
import toothImage from '../../assets/images/tooth.png'; // <-- CORRECTED PATH HERE
import boneImage from '../../assets/images/bone.png';   // <-- CORRECTED PATH HERE

const HealthStatusCards = () => {
  const healthCards = [
    { title: 'Lungs', status: 'Critical', date: '26 Oct 2021', image: lungsImage },
    { title: 'Teeth', status: 'Moderate', date: '26 Oct 2021', image: toothImage },
    { title: 'Bone', status: 'Healthy', date: '26 Oct 2021', image: boneImage },
  ];

  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="health-card">
          <img src={card.image} alt={card.title} className="health-card-image" />
          <div className="health-card-info">
            <h3>{card.title}</h3>
            <p>{card.status}</p>
            <span>{card.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;