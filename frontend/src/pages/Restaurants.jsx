import React from 'react';
import { useSelector } from 'react-redux';

import RestaurantsComponent from '../components/RestaurantsComponent';
import MessageComponent from '../components/MessageComponent';

const Restaurants = () => {
  const restaurants = useSelector(state=>state.userVisitInfo?.visitInfo?.restaurants);
  const message = useSelector(state=>state.userVisitInfo?.message);
  return (
      <>
         <MessageComponent message={message} />
         <RestaurantsComponent restaurants={restaurants} />
      </>
  
  );
};

export default Restaurants;

