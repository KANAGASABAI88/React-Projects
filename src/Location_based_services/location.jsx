import  { useState, useEffect } from 'react';
import './location.css'; 

const LocationService = () => {
  const [location, setLocation] = useState({
    latitude: localStorage.getItem('latitude') || null,
    longitude: localStorage.getItem('longitude') || null,
  });

  useEffect(() => {
    // Function to get user's current location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation({ latitude, longitude });
            localStorage.setItem('latitude', latitude);
            localStorage.setItem('longitude', longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    
    getLocation();
  }, []); 

  return (
    <div className="location-container">
      <h2>Location Service</h2>
      <div className="location-details">
        <p>Latitude: {location.latitude || 'Fetching...'}</p>
        <p>Longitude: {location.longitude || 'Fetching...'}</p>
      </div>
    </div>
  );
};

export default LocationService;

// It will then store the latitude and longitude in localStorage and display them in the component. 
// If the user's location changes, the component will update accordingly.
