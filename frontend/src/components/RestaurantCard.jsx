import React from 'react';
import { Card, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoUrl from '../assets/img/banner.png';
import star from '../assets/star.png';

import {convertMeterToKM} from '../utils/common';

const RestaurantCard = ({ _id, name, rating, price, address, description, openAt, pincode, dist }) => {
  const distance = convertMeterToKM(dist) // Calculate distance in kilometers

  return (
    <Link to={`/restaurant/${_id}`} className='pb-5' style={{ textDecoration: 'none' }}>
      <Card style={{ borderRadius: '1rem' }}>
        <Card.Header className='p-0'>
          <div className='thumnail'>
            <Image src={logoUrl} alt="Restaurant Logo" fluid style={{ width: '100%' }} />
          </div>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center pb-3" style={{ fontSize: "1.1rem" }}>
            <Card.Title>{name?.capitalize()}</Card.Title>
            <Badge bg="white" className="text-success pb-3">
              Rating:{rating}
              <img
                src={star}
                alt='star'
                className='star_img'
              />
            </Badge>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            <Badge bg="warning" className="text-white">Price: ${price}</Badge>{' '}
            <Badge bg="warning" className="text-white">Distance: {distance} KM</Badge>
          </Card.Subtitle>
          <Card.Text>{description.capitalize().truncateWithDots()}</Card.Text>
          <Card.Text>
            <strong>Address:</strong> {address.capitalize()}, {pincode}
          </Card.Text>
          <Card.Text>
            <strong>Opening Time:</strong> {openAt}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
