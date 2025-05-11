import React from 'react';

const ListItem = ({ text, onDelete, onEdit, onToggleComplete, isCompleted }) => {
  return (
    <li style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggleComplete} // Funcția de toggle este apelată aici
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={onEdit} style={{ marginLeft: '10px' }}>Modifică</button>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Șterge</button>
    </li>
  );
};

export default ListItem;
