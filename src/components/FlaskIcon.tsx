interface FlaskIconProps {
  size?: number;
  className?: string;
}

export const FlaskIcon: React.FC<FlaskIconProps> = ({
  size = 64,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ minWidth: size }}
    >
      <defs>
        <linearGradient id="flaskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bubbleGlow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 主体轮廓 */}
      <path
        d="M9 3H15M10 3V8.4C10 8.78 9.84 9.14 9.56 9.38L4.5 13.75C3.55 14.55 3 15.72 3 16.96V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V16.96C21 15.72 20.45 14.55 19.5 13.75L14.44 9.38C14.16 9.14 14 8.78 14 8.4V3"
        stroke="url(#flaskGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* 液体波浪线 */}
      <path
        d="M6.5 15.5C7.5 14.5 11 14.5 12 16.5C13 14.5 16.5 14.5 17.5 15.5"
        stroke="url(#flaskGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="d"
          values="
            M6.5 15.5C7.5 14.5 11 14.5 12 16.5C13 14.5 16.5 14.5 17.5 15.5;
            M6.5 15.5C7.5 16.5 11 16.5 12 14.5C13 16.5 16.5 16.5 17.5 15.5;
            M6.5 15.5C7.5 14.5 11 14.5 12 16.5C13 14.5 16.5 14.5 17.5 15.5
          "
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* 气泡动画 */}
      <g filter="url(#bubbleGlow)">
        <circle cx="8" cy="12" r="0.8" fill="#4F46E5">
          <animate
            attributeName="cy"
            values="12;10;12"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="16" cy="13" r="0.6" fill="#06B6D4">
          <animate
            attributeName="cy"
            values="13;11;13"
            dur="1.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="11" r="0.5" fill="#818CF8">
          <animate
            attributeName="cy"
            values="11;9;11"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};
