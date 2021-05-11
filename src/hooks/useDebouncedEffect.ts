import { useCallback, useEffect, useRef } from 'react';

export const useDebouncedEffect = (
  effect: () => void,
  delay: number,
  deps: string | number | boolean
): void => {
  const isInitialMount = useRef(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, [deps]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      timeout = setTimeout(() => {
        callback();
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [callback, delay]);
};
