import React from 'react';

const Textarea = ({className, value, placeholder, onChange}) => {
  
  return <textarea
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    ></textarea>
};

export default Textarea;