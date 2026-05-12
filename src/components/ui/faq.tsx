"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    q: "¿Tengo que cambiar el software o las planillas que ya uso?",
    a: "No. Trabajamos sobre lo que ya existe — ya sea un software de gestión, Excel o Google Drive. Construimos encima de esa base la estructura que falta para que la información sea útil al momento de decidir.",
  },
  {
    q: "¿Esto reemplaza a mi estudio contable?",
    a: "Todo lo contrario. Trabajamos en paralelo con tu estudio contable — cada uno desde su lugar, con funciones que se complementan. En muchos casos, coordinamos directamente con ellos para que la información fluya mejor y el dueño del negocio tenga una visión completa de su empresa.",
  },
  {
    q: "¿Qué pasa si hago el Diagnóstico y decido no continuar?",
    a: "El análisis queda en tu poder. Un mapa claro de dónde está tu empresa, qué información falta y qué habría que hacer para tener control operativo. Sin costos adicionales, sin compromiso de seguir.",
  },
  {
    q: "¿Cuándo veo resultados concretos?",
    a: "Al cerrar el Diagnóstico ya tenés algo real en la mano: un análisis concreto de tu situación, no una promesa. Al cerrar la Implementación, tenés visibilidad permanente de tus números. Con el Acompañamiento, esa información empieza a mover decisiones.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0D0D12", padding: "80px 24px" }}>
      <div style={{
        maxWidth: "780px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
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
            margin: 0,
          }}
        >
          Antes de dar el paso.
        </motion.h2>

        <div style={{ width: "100%" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={itemVariants}
                transition={{ delay: idx * 0.05 }}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "24px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "clamp(16px, 1.6vw, 19px)",
                    fontWeight: 600,
                    color: isOpen ? "#FAF8F5" : "rgba(250,248,245,0.85)",
                    transition: "color 0.2s",
                    letterSpacing: "-0.01em",
                  }}>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ flexShrink: 0 }}
                  >
                    <Plus size={20} color={isOpen ? "#C9A84C" : "rgba(239,236,226,0.5)"} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "15px",
                        color: "rgba(239,236,226,0.65)",
                        lineHeight: 1.8,
                        paddingBottom: "24px",
                        paddingRight: "40px",
                        margin: 0,
                      }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
