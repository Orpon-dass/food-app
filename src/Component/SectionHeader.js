import React from 'react';

export default function SectionHeader({ headingText }) {
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col  section-heading d-flex justify-content-center">
          <div className="heading w-100 text-center pt-3 pb-3">
            <div className="divider fs-4">{headingText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
