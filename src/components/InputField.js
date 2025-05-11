// src/components/InputField.js
import React from 'react';

const InputField = ({ value, onChange, placeholder, type = 'text', style }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '10px', width: '100%', marginBottom: '10px', ...style }}
    />
  );
};

export default InputField;
