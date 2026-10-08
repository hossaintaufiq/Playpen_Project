import React from "react";

interface HandDrawnUnderlineProps {
  className?: string;
  color?: string;
  variant?: "broken" | "swoosh" | "wave";
}

/**
 * Organic hand-drawn brush underline inspired by modern editorial styling.
 */
export function HandDrawnUnderline({
  className = "",
  color,
  variant = "broken",
}: HandDrawnUnderlineProps) {
  if (variant === "swoosh") {
    return (
      <svg
        className={`absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-[10px] sm:h-[13px] pointer-events-none overflow-visible ${className}`}
        viewBox="0 0 360 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 3 9.5 C 75 4.5, 180 5.2, 270 8.5 C 305 9.8, 335 8.2, 357 7"
          stroke={color || "currentColor"}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "wave") {
    return (
      <svg
        className={`absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-[10px] sm:h-[13px] pointer-events-none overflow-visible ${className}`}
        viewBox="0 0 360 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 3 8 C 60 5, 120 11, 180 8 C 240 5, 300 11, 357 7.5"
          stroke={color || "currentColor"}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Default: Authentic segmented/broken editorial brush line
  return (
    <svg
      className={`absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-[10px] sm:h-[13px] pointer-events-none overflow-visible ${className}`}
      viewBox="0 0 360 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Primary left hand-drawn stroke */}
      <path
        d="M 3 8.8 C 45 6.2, 105 5.5, 165 7.8 C 195 9.0, 218 8.4, 235 7.2"
        stroke={color || "currentColor"}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary trailing stroke with organic offset */}
      <path
        d="M 248 8.2 C 275 8.6, 315 9.4, 357 7.0"
        stroke={color || "currentColor"}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
