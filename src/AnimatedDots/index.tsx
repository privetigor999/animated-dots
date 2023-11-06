import React, { useState, useEffect, FC } from 'react';

export interface AnimatedDots {
  interval?: number;
  symbol?: string;
}

export const AnimatedDots: FC<AnimatedDots> = ({
  interval = 700,
  symbol = '.'
}) => {
  const [dots, setDots] = useState<string>(symbol);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length === 1) {
          return symbol.repeat(2)
        }

        if (prevDots.length === 2) {
          return symbol.repeat(3)
        }

        if (prevDots.length === 3) {
          return symbol.repeat(1)
        }

        return prevDots;
      });
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span>{dots}</span>
  );
};