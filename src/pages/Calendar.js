import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const handleSaveDate = () => {
    alert(`Data selectată: ${date.toDateString()}`);
  };

  return (
    <div className="calendar-container">
      <h2>Calendarul meu</h2>
      <div className="calendar">
        <Calendar
          onChange={setDate}  
          value={date}  
        />
      </div>
      
      <div className="save-section">
        <button onClick={handleSaveDate} className="btn btn-primary">
          Salvează Data
        </button>
        <p>Data selectată: {date.toDateString()}</p>
      </div>
    </div>
  );
}

export default CalendarPage;
