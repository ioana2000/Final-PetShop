import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Notes() {
  const [selectedToy, setSelectedToy] = useState('');
  const [quantity, setQuantity] = useState('');
  const [toyList, setToyList] = useState([]);

  
  const toyOptions = [
    'Jucărie sfoara', 
    'Frisbee', 
    'Jucărie cu sunet', 
    'Os de mestecat', 
    'Jucărie interactivă',
    'Păpușă din pluș', 
    'Jucărie din cauciuc', 
    'Jucărie cu laser', 
    'Minge de plajă', 
    'Jucărie de apă'
  ];

  
  const handleAddToy = () => {
    if (selectedToy && quantity) {
      const newToy = { toy: selectedToy, quantity: quantity };
      setToyList([...toyList, newToy]);
      setSelectedToy(''); 
      setQuantity(''); 
    } else {
      alert('Vă rugăm să selectați tipul de jucărie și cantitatea.');
    }
  };

  
  const handleEditToy = (index) => {
    setSelectedToy(toyList[index].toy); 
    setQuantity(toyList[index].quantity); 
  };

  
  const handleChangeQuantity = (index) => {
    const updatedToyList = [...toyList];
    updatedToyList[index].quantity = quantity; 
    setToyList(updatedToyList);
    setQuantity(''); 
  };

  
  const handleDeleteToy = (index) => {
    const updatedToyList = toyList.filter((_, i) => i !== index);
    setToyList(updatedToyList);
  };

  return (
    <div className="Notes-page">
      <h1>Lista de Jucării pentru Animalute</h1>
      
      <Form>
        <Form.Group controlId="formToySelect">
          <Form.Label>Tipul de jucărie</Form.Label>
          <Form.Control 
            as="select" 
            value={selectedToy} 
            onChange={(e) => setSelectedToy(e.target.value)}
          >
            <option value="">Alege tipul de jucărie</option>
            {toyOptions.map((toy, index) => (
              <option key={index} value={toy}>
                {toy}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Cantitatea</Form.Label>
          <Form.Control 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            placeholder="Introduceți cantitatea"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddToy}>Adaugă Jucărie</Button>
      </Form>

      <h2>Lista cu Jucării Adăugate</h2>
      <ul>
        {toyList.map((item, index) => (
          <li key={index}>
            {item.toy} - {item.quantity} bucăți
            <Button 
              variant="info" 
              onClick={() => handleEditToy(index)} 
              style={{ marginLeft: '10px' }}
            >
              Modifica Jucăria
            </Button>
            <Button 
              variant="warning" 
              onClick={() => handleChangeQuantity(index)} 
              style={{ marginLeft: '10px' }}
            >
              Schimbă Cantitatea
            </Button>
            <Button 
              variant="danger" 
              onClick={() => handleDeleteToy(index)} 
              style={{ marginLeft: '10px' }}
            >
              Șterge Jucăria
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
