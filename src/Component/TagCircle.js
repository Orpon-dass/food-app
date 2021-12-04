import React from 'react';

export default function TagCircle({ bgcolor, circleText }) {
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="circle ms-2 mt-2 mb-2 d-flex justify-content-center align-items-center"
    >
      {circleText}
    </div>
  );
}
