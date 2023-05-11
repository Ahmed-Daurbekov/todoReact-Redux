import React from 'react';

const Input = ({className, value, placeholder, onChange}) => {
  return <input
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
};

export default Input;