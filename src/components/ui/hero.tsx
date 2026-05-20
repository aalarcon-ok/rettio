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
    <section
      className="hero-bg-animated"
      style={{
        position: "relative",
        isolation: "isolate",
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
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
        background: "linear-gradient(180deg, rgba(8,13,26,0.85) 0%, rgba(8,13,26,0.95) 100%)",
        zIndex: 1,
      }} />

      {/* Gradiente ambiental teal — decorativo */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 0% 0%, rgba(13,79,92,0.2) 0%, transparent 45%), radial-gradient(ellipse at 100% 100%, rgba(13,79,92,0.15) 0%, transparent 45%)",
        pointerEvents: "none",
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
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#A78BFA",
              marginBottom: "32px",
              margin: "0 0 32px",
            }}
          >
            La información de tu negocio, convertida en decisiones.
          </motion.p>

          {/* Headline */}
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
            Tu negocio tiene las respuestas...{" "}
            <span style={{ color: "rgba(250,248,245,0.88)" }}>
              pero todavía no habla tu idioma.
            </span>
          </motion.h1>

          {/* Statement sección 2 */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(15px, 1.6vw, 19px)",
              lineHeight: 1.7,
              color: "rgba(250,248,245,0.7)",
              maxWidth: "560px",
              margin: "0 0 44px",
            }}
          >
            Construimos el sistema de información que tu empresa necesita para dejar de decidir a ciegas.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            href="#como-trabajamos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#7C3AED",
              color: "#FAF8F5",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(124,58,237,0.25)",
              transition: "all 0.2s",
              margin: "0 0 16px",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(124,58,237,0.4)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 28px rgba(124,58,237,0.25)";
            }}
          >
            Conocé el proceso →
          </motion.a>

          {/* Tag debajo del CTA */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              color: "rgba(250,248,245,0.60)",
              textAlign: "center",
              margin: "0 0 44px",
            }}
          >
            Para empresas que crecen y necesitan claridad para decidir.
          </motion.p>

          {/* Tres tarjetas */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
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
                text: "Trabajamos sobre el software, las planillas y las herramientas que ya usás. Sin imponer nada nuevo.",
              },
              {
                label: "Para quien decide",
                text: "Pensado para vos, no para cumplir con terceros.",
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
                  color: "#7C3AED",
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
