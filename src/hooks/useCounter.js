import { useState, useEffect } from 'react';

export function useCounter(target, start = 0, duration = 1200, trigger = false) {
  const end = typeof target === 'number' ? target : parseInt(target, 10) || 0;
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    // If user prefers reduced motion, set directly to end value immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (end - start) + start));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, start, duration, trigger]);

  return count;
}
