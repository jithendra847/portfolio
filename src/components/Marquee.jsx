import React from 'react';

export const Marquee = () => {
  const items = [
    "C++ & ALGORITHMS",
    "PYTHON & FASTAPI",
    "POSTGRESQL & SQL",
    "REACT & JAVASCRIPT",
    "REST APIS & SYSTEMS",
    "TELEMETRY ANALYTICS",
    "NIT SRINAGAR IT"
  ];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).concat(items).map((item, idx) => (
          <div className="marquee-item" key={idx}>
            <span>{item}</span>
            <span className="marquee-dot">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
