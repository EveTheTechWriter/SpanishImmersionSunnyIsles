import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-xl bg-white ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className || ""}`}>
      {children}
    </div>
  );
}
