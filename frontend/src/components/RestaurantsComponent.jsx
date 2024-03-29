import React from 'react';
import RestaurantCard from './RestaurantCard';
import { Container, Row, Col } from 'react-bootstrap';

const RestaurantsComponent = ({ restaurants }) => {
  return (
    <Container>
      <Row className="justify-content-center restaurants">
        {restaurants?.map((restaurant) => (
          <Col key={restaurant._id} xs={12} sm={6} md={3} lg={4} className='my-3 gap-2 restaurantCard'>
            <RestaurantCard {...restaurant}  />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RestaurantsComponent;

