"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const phases = [
  {
    num: "01",
    title: "Diagnóstico",
    duration: "2 semanas",
    price: "USD 300–500",
    desc: "Antes de proponer nada, entendemos tu negocio: qué información existe, dónde está, qué software o planillas usás y qué preguntas todavía no tienen respuesta.",
    note: "Se descuenta de la Implementación si decidís continuar.",
  },
  {
    num: "02",
    title: "Implementación",
    duration: "3–6 meses",
    price: null,
    desc: "Construimos el sistema sobre lo que ya existe en tu empresa. Definimos la estructura de la información y desarrollamos los reportes e indicadores que necesitás para gestionar y decidir.",
    note: null,
  },
  {
    num: "03",
    title: "Acompañamiento",
    duration: "Mensual",
    price: null,
    desc: "Una vez por mes revisamos los números juntos. No para reportar — para interpretar qué dicen y qué decisiones tienen más sentido tomar a partir de eso.",
    note: null,
  },
];

export function ComoTrabajamos() {
  return (
    <section
      id="como-trabajamos"
      style={{ backgroundColor: "#0D0D12", padding: "80px 24px" }}
    >
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
      }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={itemVariants}
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#FAF8F5",
            textAlign: "center",
            maxWidth: "680px",
            margin: 0,
          }}
        >
          Un proceso en tres fases, sin genéricos.
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative", width: "100%" }}>
          {/* Línea horizontal — solo desktop */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "40px",
              left: "10%",
              right: "10%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
              zIndex: 0,
            }}
          />

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "24px", position: "relative" }}
          >
            {phases.map((phase, idx) => (
              <Fragment key={phase.num}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={itemVariants}
                  transition={{ delay: idx * 0.15 }}
                  className="items-center text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.1, duration: 0.5, ease: "backOut" }}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#0D0D12",
                      border: "1px solid rgba(201,168,76,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#C9A84C",
                      letterSpacing: "-0.02em",
                      boxShadow: "0 0 24px rgba(201,168,76,0.08)",
                      flexShrink: 0,
                    }}
                  >
                    {phase.num}
                  </motion.div>

                  <div>
                    <h3 style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 700,
                      color: "#FAF8F5",
                      marginBottom: "10px",
                      letterSpacing: "-0.01em",
                    }}>{phase.title}</h3>
                    <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "11px",
                        padding: "4px 12px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "999px",
                        color: "rgba(239,236,226,0.7)",
                        fontWeight: 500,
                      }}>{phase.duration}</span>
                      {phase.price && (
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "11px",
                          padding: "4px 12px",
                          backgroundColor: "rgba(201,168,76,0.12)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          borderRadius: "999px",
                          color: "#C9A84C",
                          fontWeight: 500,
                        }}>{phase.price}</span>
                      )}
                    </div>
                  </div>

                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "rgba(239,236,226,0.6)",
                    lineHeight: 1.7,
                    maxWidth: "300px",
                    margin: 0,
                  }}>{phase.desc}</p>

                  {phase.note && (
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "12px",
                      fontStyle: "italic",
                      color: "rgba(201,168,76,0.65)",
                      lineHeight: 1.6,
                      maxWidth: "260px",
                      margin: 0,
                    }}>{phase.note}</p>
                  )}
                </motion.div>

                {/* Separador móvil — visible solo entre fases, no después de la última */}
                {idx < phases.length - 1 && (
                  <div
                    className="block md:hidden"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 0",
                    }}
                  >
                    <ChevronDown size={28} color="#C9A84C" style={{ opacity: 0.6 }} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <a
            href="https://wa.me/59892922583"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#C9A84C",
              color: "#0D0D12",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              padding: "13px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Iniciá con el Diagnóstico →
          </a>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            color: "rgba(239,236,226,0.4)",
            textAlign: "center",
            margin: 0,
          }}>
            2 semanas · Sin compromiso de continuar · El análisis queda en tu poder
          </p>
        </motion.div>

      </div>
    </section>
  );
}
