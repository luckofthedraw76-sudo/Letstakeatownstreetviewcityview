import React from 'react';

const Map = ({ city }) => {
  return (
    <div className="map-container">
      <div className="map-placeholder">
        <div className="map-content">
          <h3>{city}</h3>
          <p>🗺️ Interactive Map Coming Soon</p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
            Integration with Mapbox GL or Google Maps API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
