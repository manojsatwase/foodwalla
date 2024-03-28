import React from 'react';
import RestaurantCard from './RestaurantCard';

const ParentComponent = ({ restaurants }) => {
  return (
    <div className="container  pt-5">
      <div className="d-flex flex-wrap justify-content-around">
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantCard  key={restaurant._id}  {...restaurant} />
          ))}
      </div>
    </div>
  );
};

export default ParentComponent;
