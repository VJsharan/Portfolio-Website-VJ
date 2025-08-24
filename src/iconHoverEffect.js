import { useState } from 'react';

export default function useIconHoverEffect() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getMovementClass = (index) => {
    return (currentIndex) => {
      if (currentIndex === index) return 'scale-110 z-10';
      if (currentIndex === index - 1 || currentIndex === index + 1)
        return 'translate-x-1';
      return '';
    };
  };

  return { hoveredIndex, setHoveredIndex, getMovementClass };
}
