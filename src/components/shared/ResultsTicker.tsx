"use client";

const items = [
  "54x ROAS — Newturn Furniture",
  "₹10L Revenue — DS Pet",
  "200+ Orders Month 2 — Siddhohum",
  "586 Leads @ ₹12 — Renatus",
  "5000+ Attendees — Tejaji",
  "₹1.6L/mo — Poshpankh",
  "400K+ Reach — Tanya TDMS",
  "40x ROAS — Diya Chair",
];

export default function ResultsTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
        padding: "0.875rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker 28s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0 1.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--color-orange)",
                opacity: 0.6,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
