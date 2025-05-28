// src/components/AnatomySection/AnatomySection.js

import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../../assets/images/anatomy.jpg'; // <-- CORRECTED PATH HERE

const AnatomySection = () => {
  const healthIndicators = [
    { label: 'Healthy Heart', color: '#4ade80', position: { top: '30%', left: '50%' } },
    { label: 'Lungs', color: '#f87171', position: { top: '40%', left: '45%' } },
    { label: 'Teeth', color: '#facc15', position: { top: '10%', left: '50%' } },
    { label: 'Bone', color: '#3b82f6', position: { top: '70%', left: '55%' } },
  ];

  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img src={anatomyImage} alt="Anatomical Illustration" className="anatomy-image" />
        {healthIndicators.map((indicator, index) => (
          <div
            key={index}
            className="indicator"
            style={{
              backgroundColor: indicator.color,
              top: indicator.position.top,
              left: indicator.position.left,
            }}
          >
            {indicator.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;