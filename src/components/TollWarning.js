import React from 'react';

const TollWarning = ({ tolls }) => {
  if (!tolls) return null;

  return (
    <div className="toll-warning">
      <div className="toll-header">
        <span className="toll-icon">⚠️</span>
        <h4>Toll Alert</h4>
      </div>
      <div className="toll-details">
        <p className="toll-name"><strong>{tolls.name}</strong></p>
        <p className="toll-amount">Cost: <span className="amount">${tolls.amount}</span></p>
        <p className="toll-note">Cash and E-ZPass accepted</p>
      </div>
      <button className="btn-secondary">View Alternative Route</button>
    </div>
  );
};

export default TollWarning;
