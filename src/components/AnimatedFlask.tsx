import React from 'react';

const AnimatedFlask = () => {
  return (
    <svg
      className="animate-on-hover"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'scale(2.5)' }}
    >
      <path
        d="M9 3H15M10 3V8.4C10 8.78 9.84 9.14 9.56 9.38L4.5 13.75C3.55 14.55 3 15.72 3 16.96V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V16.96C21 15.72 20.45 14.55 19.5 13.75L14.44 9.38C14.16 9.14 14 8.78 14 8.4V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 15.5C7.5 14.5 11 14.5 12 16.5C13 14.5 16.5 14.5 17.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AnimatedFlask;