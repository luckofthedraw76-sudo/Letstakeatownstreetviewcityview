import React from 'react';

const CitySelector = ({ onSelectCity }) => {
  const cities = [
    { id: 1, name: 'New York City, NY', image: '🗽' },
    { id: 2, name: 'Chicago, IL', image: '🌆' },
    { id: 3, name: 'Los Angeles, CA', image: '☀️' },
    { id: 4, name: 'Houston, TX', image: '🏙️' },
    { id: 5, name: 'Phoenix, AZ', image: '🌵' },
  ];

  return (
    <div className="city-selector">
      <h2>Select a City</h2>
      <p>Choose a city to start navigating</p>
      
      <div className="cities-grid">
        {cities.map(city => (
          <button
            key={city.id}
            className="city-card"
            onClick={() => onSelectCity(city.name)}
          >
            <span className="city-emoji">{city.image}</span>
            <span className="city-name">{city.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySelector;
