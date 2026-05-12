"use client";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Hero() {
  return (
    <section style={{
      position: "relative",
      isolation: "isolate",
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      paddingTop: "80px",
      backgroundColor: "#0D0D12",
    }}>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.25,
          filter: "saturate(0.6) contrast(0.9) blur(1px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(13,13,18,0.85) 0%, rgba(13,13,18,0.95) 100%)",
        zIndex: 1,
      }} />

      {/* Contenido */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 24px 32px",
        width: "100%",
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.7)",
              marginBottom: "32px",
              margin: "0 0 32px",
            }}
          >
            Para empresas que crecen y necesitan claridad para decidir
          </motion.p>

          {/* Frase de posicionamiento */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FAF8F5",
              maxWidth: "920px",
              margin: "0 0 32px",
            }}
          >
            Construimos el sistema de información{" "}
            <span style={{
              background: "linear-gradient(180deg, rgba(250,248,245,0.6) 0%, rgba(250,248,245,0.25) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}>
              que tu empresa necesita
            </span>
            {" "}para dejar de decidir a ciegas.
          </motion.h1>

          {/* Headline secundario */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 19px)",
              lineHeight: 1.7,
              color: "rgba(239,236,226,0.7)",
              maxWidth: "560px",
              margin: "0 0 44px",
            }}
          >
            Los números están. Las respuestas a tus preguntas
            <span style={{ color: "#C9A84C" }}>...</span> todavía no.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            href="#como-trabajamos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#C9A84C",
              color: "#0D0D12",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(201,168,76,0.18)",
              transition: "all 0.2s",
              margin: "0 0 32px",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.3)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 28px rgba(201,168,76,0.18)";
            }}
          >
            Conocé el proceso →
          </motion.a>

          {/* Tres tarjetas */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              width: "100%",
              maxWidth: "920px",
            }}
          >
            {[
              {
                label: "Diagnóstico",
                text: "Entendemos dónde están tus números y qué falta para leerlos con claridad.",
              },
              {
                label: "Sin cambiar nada",
                text: "Trabajamos sobre el software, Excel o Drive que ya usás. Sin imponer herramientas nuevas.",
              },
              {
                label: "Para decidir",
                text: "Un sistema de información pensado para el dueño, no para cumplir con terceros.",
              },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  backgroundColor: "rgba(42,42,53,0.4)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  backdropFilter: "blur(12px)",
                  textAlign: "left",
                }}
              >
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  margin: "0 0 12px",
                }}>
                  {card.label}
                </p>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  color: "#FAF8F5",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {card.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
