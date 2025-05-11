import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MyCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Aceasta este o descriere a cardului. Poți adăuga mai multe informații aici.
        </Card.Text>
        <Button variant="primary">Vezi detalii</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
