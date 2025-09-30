import React from "react";

export function Button({ children, onClick, className, size }) {
  const sizes = {
    lg: "px-6 py-4 text-lg",
    md: "px-4 py-2 text-base",
    sm: "px-3 py-1 text-sm"
  };
  return (
    <button
      onClick={onClick}
      className={`${sizes[size] || sizes.md} rounded-full font-semibold shadow ${className || ""}`}
    >
      {children}
    </button>
  );
}
