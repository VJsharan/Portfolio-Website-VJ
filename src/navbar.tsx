import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRegMoon,
  FaTwitter,
  FaRegFileAlt,
} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount: check localStorage or system preference
  useEffect(() => {
    const dark = localStorage.getItem('theme') === 'dark' ||
                 (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(dark);
    if (dark) document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const icons = [
    { icon: <FaHome size={20} />, link: '/' },
    {
      icon: <FaRegFileAlt size={20} />,
      link: 'https://drive.google.com/file/d/19n95JDRHQPzd9NCxmF4UcyveNmiOOGc4',
    },
    'divider',
    {
      icon: <FaGithub size={20} />,
      link: 'https://github.com/vijaysharan',
    },
    {
      icon: <FaLinkedin size={20} />,
      link: 'https://linkedin.com/in/vijaysharan',
    },
    {
      icon: <FaTwitter size={20} />,
      link: 'https://twitter.com/vijaysharan',
    },
    {
      icon: <FaEnvelope size={20} />,
      link: 'mailto:11224.vijaysharan@gmail.com',
    },
    'divider',
    {
      icon: <FaRegMoon size={20} />,
      isButton: true,
      action: toggleDarkMode,
    },
  ];

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50
      flex items-center bg-black/5 dark:bg-white/10 backdrop-blur-xl rounded-full px-4 py-2
      transition-all duration-300 shadow-lg gap-1 hover:gap-`}
    >
      {icons.map((item, index) => {
        if (item === 'divider') {
          return (
            <span
              key={index}
              className="mx-0 h-6 w-px bg-black/80 dark:bg-white/80"
            ></span>
          );
        }

        const isHovered = hoveredIndex === index;
        const isNextToHovered =
          hoveredIndex === index - 1|| hoveredIndex === index + 1;

        const baseClasses =
        'p-2 hover:bg-white/10 dark:hover:bg-black/20 rounded-full transition-transform duration-300 ease-out origin-center will-change-transform';

        const movementClass = isHovered
        ? 'scale-[1.35] z-10 translate-y-[-3px] rotate-3'
        : isNextToHovered
        ? 'translate-x-1 translate-y-[1px] rotate-[1deg]'
        : '';
        const combinedClasses = `${baseClasses} ${movementClass}`;

        if (item.isButton) {
          return (
            <button
              key={index}
              className={combinedClasses}
              onClick={item.action}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.icon}
            </button>
          );
        }

        return (
          <a
            key={index}
            href={item.link}
            target={item.link.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={combinedClasses}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.icon}
          </a>
        );
      })}

    </nav>
  );
}
