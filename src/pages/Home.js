import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Home() {
  const navigate = useNavigate();

  const goToTasks = () => {
    navigate('/tasks');
  };

  const goToNotes = () => {
    navigate('/notes');
  };

  return (
    <div className="Home-page">
      <h1>Bine ai venit la PetShop!</h1>
      <Button variant="primary" onClick={goToTasks}>Mergi la task-uri</Button>
      <Button variant="secondary" onClick={goToNotes} style={{ marginLeft: '10px' }}>
        Mergi la notițe
      </Button>
    </div>
  );
}

export default Home;
