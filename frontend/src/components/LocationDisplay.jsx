const LocationDisplay = ({ location }) => {
  return (
    <div>
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default LocationDisplay;
