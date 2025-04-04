import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    city: "",
    state: "",
    country: "",
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchLocation = () => {
      if (!navigator.geolocation) {
        setLocation((prev) => ({ ...prev, error: "Geolocation is not supported", loading: false }));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prev) => ({ ...prev, latitude, longitude, loading: true }));

          // Reverse Geocode API to get city details
          try {
            const response = await fetch(
              `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=YOUR_API_KEY`
            );
            const data = await response.json();

            setLocation((prev) => ({
              ...prev,
              city: data.address?.city || "Unknown City",
              state: data.address?.state || "Unknown State",
              country: data.address?.country || "Unknown Country",
              loading: false,
            }));
          } catch (error) {
            setLocation((prev) => ({ ...prev, error: "Failed to fetch location details", loading: false }));
          }
        },
        (error) => {
          setLocation((prev) => ({
            ...prev,
            error: error.message || "Location access denied",
            loading: false,
          }));
        }
      );
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md w-80 mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-2">Your Location</h2>
      {location.loading ? (
        <p className="text-blue-500">Fetching location...</p>
      ) : location.error ? (
        <p className="text-red-500">{location.error}</p>
      ) : (
        <p className="text-gray-700">
          📍 {location.city}, {location.state}, {location.country}
        </p>
      )}
    </div>
  );
};

export default Location;
