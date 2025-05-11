import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Tasks() {
  const [selectedFood, setSelectedFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [selectedFoodsForDelete, setSelectedFoodsForDelete] = useState([]); 
  const foodOptions = ['Crochete', 'Lapte', 'Carne de pui', 'Pește', 'Mâncare umedă'];

  const handleAddFood = () => {
    if (selectedFood && quantity) {
      const newFood = { food: selectedFood, quantity: quantity };
      setFoodList([...foodList, newFood]);
      setSelectedFood(''); 
      setQuantity(''); 
    } else {
      alert('Vă rugăm să selectați tipul de mâncare și cantitatea.');
    }
  };

  
  const handleEditFood = (index) => {
    setEditIndex(index);
    setSelectedFood(foodList[index].food); 
    setQuantity(foodList[index].quantity); 
  };
  const handleChangeQuantity = (index) => {
    if (quantity) {
      const updatedFoodList = [...foodList];
      updatedFoodList[index].quantity = quantity; 
      setFoodList(updatedFoodList);
      setQuantity(''); 
      setEditIndex(null); 
    } else {
      alert('Vă rugăm să introduceți o cantitate validă.');
    }
  };

  const handleSaveFood = () => {
    if (selectedFood && quantity) {
      const updatedFoodList = [...foodList];
      updatedFoodList[editIndex].food = selectedFood; 
      updatedFoodList[editIndex].quantity = quantity; 
      setFoodList(updatedFoodList);
      setSelectedFood('');
      setQuantity('');
      setEditIndex(null); 
    } else {
      alert('Vă rugăm să completați câmpurile pentru tipul de mâncare și cantitate.');
    }
  };

  const handleSelectForDelete = (index) => {
    if (selectedFoodsForDelete.includes(index)) {
      setSelectedFoodsForDelete(selectedFoodsForDelete.filter((i) => i !== index)); 
    } else {
      setSelectedFoodsForDelete([...selectedFoodsForDelete, index]); 
    }
  };

  const handleDeleteSelectedFoods = () => {
    const updatedFoodList = foodList.filter((_, index) => !selectedFoodsForDelete.includes(index)); 
    setFoodList(updatedFoodList);
    setSelectedFoodsForDelete([]); 
  };

  return (
    <div className="Tasks-page">
      <h1>Lista de Mâncare pentru Animalute</h1>
      
      <Form>
        <Form.Group controlId="formFoodSelect">
          <Form.Label>Tipul de mâncare</Form.Label>
          <Form.Control 
            as="select" 
            value={selectedFood} 
            onChange={(e) => setSelectedFood(e.target.value)}
          >
            <option value="">Alege tipul de mâncare</option>
            {foodOptions.map((food, index) => (
              <option key={index} value={food}>
                {food}
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

        {editIndex !== null ? (
          <Button variant="primary" onClick={handleSaveFood}>Salvează Modificările</Button>
        ) : (
          <Button variant="primary" onClick={handleAddFood}>Adaugă Mâncare</Button>
        )}
      </Form>

      <h2>Lista cu Mâncare Adăugată</h2>
      <ul>
        {foodList.map((item, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={selectedFoodsForDelete.includes(index)} 
              onChange={() => handleSelectForDelete(index)} 
              style={{ marginRight: '10px' }}
            />
            {item.food} - {item.quantity} kg
            <Button 
              variant="info" 
              onClick={() => handleEditFood(index)} 
              style={{ marginLeft: '10px' }}
            >
              Modifica Mâncarea
            </Button>
            <Button 
              variant="warning" 
              onClick={() => handleChangeQuantity(index)} 
              style={{ marginLeft: '10px' }}
            >
              Schimbă Cantitatea
            </Button>
          </li>
        ))}
      </ul>

      <Button 
        variant="danger" 
        onClick={handleDeleteSelectedFoods} 
        disabled={selectedFoodsForDelete.length === 0}
        style={{ marginTop: '10px' }}
      >
        Șterge Mâncarea Selectată
      </Button>
    </div>
  );
}

export default Tasks;
