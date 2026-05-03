import React, { useState } from 'react';
import './styles/App.css';
import CitySelector from './components/CitySelector';
import Map from './components/Map';
import Navigation from './components/Navigation';
import TollWarning from './components/TollWarning';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [navigationActive, setNavigationActive] = useState(false);
  const [route, setRoute] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setNavigationActive(false);
  };

  const handleStartNavigation = (destination) => {
    setRoute({
      from: selectedCity,
      to: destination,
      tolls: calculateTolls(selectedCity, destination)
    });
    setNavigationActive(true);
  };

  const calculateTolls = (from, to) => {
    // Mock toll calculation - replace with real API
    const tollData = {
      'NYC-NJ': { amount: 16.50, name: 'Holland Tunnel' },
      'NYC-Westchester': { amount: 8.00, name: 'Tappan Zee Bridge' },
    };
    return tollData[`${from}-${to}`] || null;
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🗺️ Letstakeatownstreetviewcityview</h1>
        <p>Navigate Cities with Confidence</p>
      </header>

      <main className="app-main">
        {!selectedCity ? (
          <CitySelector onSelectCity={handleSelectCity} />
        ) : (
          <div className="city-view">
            <button 
              className="back-btn" 
              onClick={() => setSelectedCity(null)}
            >
              ← Change City
            </button>
            
            <div className="content-grid">
              <div className="map-section">
                <Map city={selectedCity} />
              </div>
              
              <div className="info-section">
                <Navigation 
                  city={selectedCity} 
                  onNavigate={handleStartNavigation}
                />
                
                {navigationActive && route && (
                  <TollWarning tolls={route.tolls} />
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 Letstakeatownstreetviewcityview - Making Cities Accessible</p>
      </footer>
    </div>
  );
}

export default App;
