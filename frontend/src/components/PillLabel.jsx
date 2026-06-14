import React from "react";

function PillLabel({ children, size = "md" }) {
  const sizes = {
    sm: { padding: "8px 22px", fontSize: "12px" },
    md: { padding: "11px 30px", fontSize: "14px" },
    lg: { padding: "14px 36px", fontSize: "16px" },
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#C7427E",
        border: "3px solid #8E1F55",
        borderRadius: "999px",
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        letterSpacing: "0.1em",
        color: "#FFFFFF",
        textTransform: "uppercase",
        textShadow: "0 1px 3px rgba(0,0,0,0.35)",
        boxShadow: "0 4px 18px rgba(199,66,126,0.55), 0 2px 0 rgba(0,0,0,0.3)",
        ...sizes[size],
      }}
    >
      {children}
    </div>
  );
}

export default PillLabel;
