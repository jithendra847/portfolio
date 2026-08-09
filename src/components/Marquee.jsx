import React from 'react';

export const Marquee = () => {
  const items = [
    "SOFTWARE DEVELOPMENT",
    "PROBLEM SOLVING",
    "WEB DEVELOPMENT",
    "SYSTEM ARCHITECTURE",
    "ALGORITHMS",
    "C++ & PYTHON"
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.concat(items).concat(items).map((item, idx) => (
          <div className="marquee-item" key={idx}>
            <span>{item}</span>
            <span className="marquee-dot">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};
