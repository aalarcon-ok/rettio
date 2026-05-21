"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function CTAFinal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let mouseX = canvas.offsetWidth / 2;
    let mouseY = canvas.offsetHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      mouseX = targetX = canvas.width / 2;
      mouseY = targetY = canvas.height / 2;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.touches[0].clientX - rect.left;
      targetY = e.touches[0].clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    const waves = [
      { offset: 0,              amplitude: 45, frequency: 0.004,  color: "rgba(25,126,168,0.18)" },
      { offset: Math.PI / 2,   amplitude: 55, frequency: 0.003,  color: "rgba(25,126,168,0.12)" },
      { offset: Math.PI,       amplitude: 38, frequency: 0.0035, color: "rgba(255,255,255,0.05)" },
      { offset: Math.PI * 1.5, amplitude: 48, frequency: 0.0025, color: "rgba(25,126,168,0.08)" },
    ];

    const draw = () => {
      time++;
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 4) {
          const dx = x - mouseX;
          const dy = canvas.height / 2 - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 300);
          const mouseEffect = influence * 50 *
            Math.sin(time * 0.001 + x * 0.01 + wave.offset);

          const y = canvas.height / 2 +
            Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.4) +
            mouseEffect;

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = wave.color;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "rgba(25,126,168,0.3)";
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <>
      <section style={{
        position: "relative",
        backgroundColor: "var(--rettio-bg)",
        padding: "60px 24px",
        overflow: "hidden",
        borderTop: "1px solid var(--rettio-border-subtle)",
      }}>
        {/* Canvas de ondas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
            opacity: 0.7,
          }}
          aria-hidden
        />

        {/* Transición desde sección anterior */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, rgba(25,126,168,0.08))",
          pointerEvents: "none",
        }} />

        {/* Luminosidad teal — esquina inferior derecha */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 80% 80%, rgba(25,126,168,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Halo radial central */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(25,126,168,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          textAlign: "center",
        }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(24px, 3.2vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textAlign: "center",
              maxWidth: "900px",
            }}
          >
            <span style={{ color: "var(--rettio-text)", display: "block" }}>
              Tu empresa tiene las respuestas...
            </span>
            <span style={{ display: "block", color: "var(--rettio-text)" }}>
              nosotros las traducimos al idioma con el que pensás tu negocio.
            </span>
          </motion.h2>

          <motion.a
            href="https://wa.me/59892922583"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "var(--rettio-accent)",
              color: "#FFFFFF",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              padding: "18px 48px",
              borderRadius: "999px",
              textDecoration: "none",
              marginTop: "16px",
              boxShadow: "0 0 32px rgba(25,126,168,0.25)",
            }}
          >
            Empecemos →
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "var(--rettio-bg)",
        borderTop: "1px solid var(--rettio-border-subtle)",
        paddingTop: "60px",
        paddingBottom: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}>
          <img
            src="/assets/rettio_logo_dark_v3.png"
            alt="rettio"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "contain",
              opacity: 0.85,
              marginBottom: "24px",
            }}
          />

          <a
            href="mailto:hablemos@rettio.pro"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              color: "var(--rettio-text-secondary)",
              textDecoration: "none",
            }}
          >
            <Mail size={14} color="var(--rettio-accent)" />
            hablemos@rettio.pro
          </a>

          <a
            href="https://wa.me/59892922583"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              color: "var(--rettio-text-secondary)",
              textDecoration: "none",
            }}
          >
            <Phone size={14} color="var(--rettio-accent)" />
            +598 92 922 583
          </a>

          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "12px",
            color: "var(--rettio-text-muted)",
            textAlign: "center",
          }}>
            © 2026 rettio. Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}