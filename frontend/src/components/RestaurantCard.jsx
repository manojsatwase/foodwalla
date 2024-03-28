import React from 'react';
import { Card, Badge, Image } from 'react-bootstrap';
import logoUrl from '../assets/img/banner.png';
import '../utils/common';

const RestaurantCard = ({ name, rating, price, address, description, openAt, pincode, dist, onClick }) => {
  const distance = Math.floor(dist?.calculated / 1000); // Calculate distance in kilometers
  return (
    <Card className='restaurantCard' style={{ maxWidth: '30%' }}>
      <Card.Header className='p-0'>
        <Card.Link href={logoUrl}>
          <Image src={logoUrl} alt="Restaurant Logo" fluid style={{ width: '100%' }} />
        </Card.Link>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center pb-3" style={{fontSize:"1.1rem"}}>
          <Card.Title>{name?.capitalize()}</Card.Title>
          <Badge bg="white" className="text-success pb-3">Rating:{rating}⭐️</Badge>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          <Badge bg="warning" className="text-white">Price: ${price}</Badge>{' '}
          <Badge bg="warning" className="text-white">Distance: {distance} KM</Badge>
        </Card.Subtitle>
        <Card.Text>{description.capitalize()}</Card.Text>
        <Card.Text>
          <strong>Address:</strong> {address.capitalize()}, {pincode}
        </Card.Text>
        <Card.Text>
          <strong>Opening Time:</strong> {openAt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
