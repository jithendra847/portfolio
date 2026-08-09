import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch screen
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('[data-cursor], a, button, input, textarea');
      if (target) {
        const type = target.getAttribute('data-cursor') || 'pointer';
        setCursorType(type);
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  const getLabel = () => {
    if (cursorType === 'view') return 'VIEW';
    if (cursorType === 'link') return '↗';
    if (cursorType === 'external') return '↗';
    return '•';
  };

  return (
    <div
      className={`custom-cursor cursor-${cursorType}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      <span className="cursor-label">{getLabel()}</span>
    </div>
  );
};
