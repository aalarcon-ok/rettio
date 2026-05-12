"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: scrolled ? "rgba(13,13,18,0.97)" : "rgba(13,13,18,0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "10px 24px",
      transition: "background-color 0.3s ease",
      boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logo_obsidiana_champan_completo_cropped.png"
            alt="rettio"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        <a
          href="https://wa.me/59892922583"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#C9A84C",
            border: "1px solid rgba(201,168,76,0.4)",
            padding: "8px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.1)";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
          }}
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
