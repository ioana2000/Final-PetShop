import React, { useState } from 'react';
import { Button, Card, Form, Container } from 'react-bootstrap';

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState('Standard');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333';
    document.body.style.color = isDarkMode ? '#000' : '#fff';
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDeliveryChange = (event) => {
    setDeliveryMethod(event.target.value);
  };

  return (
    <Container>
      <h2>Setări</h2>
      <Card style={{ marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title>1. Schimbă Tema</Card.Title>
          <Button onClick={toggleTheme} variant={isDarkMode ? 'light' : 'dark'}>
            {isDarkMode ? 'Schimbă la Light Mode' : 'Schimbă la Dark Mode'}
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title>2. Setări Notificări</Card.Title>
          <Form.Check 
            type="switch"
            id="notificationsSwitch"
            label={notificationsEnabled ? 'Notificări Active' : 'Notificări Dezactivate'}
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>3. Setări Livrare</Card.Title>
          <Form.Group>
            <Form.Label>Metodă de Livrare</Form.Label>
            <Form.Control 
              as="select" 
              value={deliveryMethod} 
              onChange={handleDeliveryChange}
            >
              <option value="Standard">Livrare Standard</option>
              <option value="Express">Livrare Expres</option>
              <option value="Pickup">Ridicare din Magazin</option>
            </Form.Control>
          </Form.Group>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Settings;
