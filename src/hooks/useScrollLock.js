import { useEffect } from 'react';

/**
 * Reusable hook to safely lock and restore body scroll.
 * Handles component unmount and browser edge-cases reliably.
 * @param {boolean} isLocked - Whether body scroll should be locked.
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Prevent content jump when scrollbar disappears
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}
