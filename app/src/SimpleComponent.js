import React from 'react';

function SimpleComponent({ text, shouldShow }) {
  return (
    <div>
      { shouldShow && text }
    </div>
  )
}
export default SimpleComponent;
