const EARTH_RADIUS_METERS = 6371000; // Earth's radius is 6371.0 kilometers, which is equivalent to 6371000 meters
const MAX_DISTANCE_METERS = 500;

// Convert meters to radians using Earth's radius
const maxDistanceRadians = MAX_DISTANCE_METERS / EARTH_RADIUS_METERS;

module.exports = {
  maxDistanceRadians,
};

