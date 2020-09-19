import React from 'react';

export const Text = ({ value, style, className, onClick }) => (
  <p style={style} className={className}>
    {value}
  </p>
);
