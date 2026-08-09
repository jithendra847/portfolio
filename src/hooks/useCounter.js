import { useState, useEffect } from 'react';

export function useCounter(target, start = 0, duration = 1500, trigger = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const end = typeof target === 'number' ? target : parseInt(target, 10);
    if (isNaN(end)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quad
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, start, duration, trigger]);

  return count;
}
