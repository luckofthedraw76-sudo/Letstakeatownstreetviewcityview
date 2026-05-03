import React, { useState } from 'react';

const Navigation = ({ city, onNavigate }) => {
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState(null);

  const handleNavigate = (e) => {
    e.preventDefault();
    if (destination.trim()) {
      setRoute({
        steps: [
          { instruction: 'Start heading North on Main Street', distance: '0.5 mi' },
          { instruction: 'Turn right on Broadway', distance: '1.2 mi' },
          { instruction: 'Merge onto Highway 1', distance: '3.5 mi' },
          { instruction: 'Take Exit 42', distance: '0.8 mi' },
          { instruction: 'Arrive at destination', distance: '0.2 mi' },
        ]
      });
      onNavigate(destination);
    }
  };

  return (
    <div className="navigation-panel">
      <h3>📍 Get Directions</h3>
      
      <form onSubmit={handleNavigate}>
        <input
          type="text"
          placeholder="Enter destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="btn-primary">Start Navigation</button>
      </form>

      {route && (
        <div className="directions-list">
          <h4>Turn-by-Turn Directions</h4>
          {route.steps.map((step, idx) => (
            <div key={idx} className="direction-step">
              <span className="step-number">{idx + 1}</span>
              <div className="step-content">
                <p className="step-instruction">{step.instruction}</p>
                <p className="step-distance">{step.distance}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
