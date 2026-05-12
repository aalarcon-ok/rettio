"use client";
import { motion } from "framer-motion";
import { TrendingUp, FileText, LayoutDashboard } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const iconItems = [
  {
    icon: TrendingUp,
    label: "Indicadores",
    desc: "Los números que realmente importan para tu negocio",
  },
  {
    icon: FileText,
    label: "Reportes",
    desc: "En el lenguaje con el que pensás tu empresa",
  },
  {
    icon: LayoutDashboard,
    label: "Dashboards",
    desc: "El estado de tu negocio en un solo lugar",
  },
];

const bullets = [
  <>
    <strong style={{ color: "#FAF8F5" }}>Tu negocio</strong>
    {" "}no se paraliza cuando vos no estás.
  </>,
  <>
    Un lugar donde mirar{" "}
    <strong style={{ color: "#FAF8F5" }}>el estado del negocio</strong>
    , sin depender de que alguien te lo arme.
  </>,
  <>
    <strong style={{ color: "#FAF8F5" }}>Decidís con respaldo</strong>
    , no solo con experiencia e intuición.
  </>,
  <>
    Números en los que podés confiar,{" "}
    <strong style={{ color: "#FAF8F5" }}>respaldados por estructura contable</strong>.
  </>,
  <>
    <strong style={{ color: "#FAF8F5" }}>Un sistema a medida</strong>
    , construido sobre lo que ya existe en tu empresa.
  </>,
  <>
    Reportes escritos para quien decide —{" "}
    <strong style={{ color: "#FAF8F5" }}>sin tecnicismos, con contexto para actuar</strong>.
  </>,
];

export function QueObtenes() {
  return (
    <section style={{ backgroundColor: "#0D0D12", padding: "80px 24px" }}>
      <div style={{
        maxWidth: "780px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "44px",
      }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={titleVariants}
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
          Lo que cambia cuando la información empieza a trabajar para vos.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          {bullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                backgroundColor: "rgba(201,168,76,0.04)",
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                padding: "20px 12px",
                borderRadius: "8px",
                borderBottom: idx < bullets.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
                cursor: "default",
              }}
            >
              <motion.div
                initial={{ opacity: 0.3, boxShadow: "none" }}
                whileInView={{
                  opacity: 1,
                  boxShadow: idx === 0
                    ? "0 0 16px rgba(201,168,76,0.6)"
                    : "0 0 12px rgba(201,168,76,0.5)",
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.4 }}
                style={{
                  width: idx === 0 ? "9px" : "7px",
                  height: idx === 0 ? "9px" : "7px",
                  borderRadius: "50%",
                  backgroundColor: "#C9A84C",
                  flexShrink: 0,
                  marginTop: idx === 0 ? "10px" : "9px",
                }}
              />
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: idx === 0 ? "20px" : "clamp(15px, 1.5vw, 17px)",
                color: idx === 0 ? "#FAF8F5" : "rgba(239,236,226,0.8)",
                lineHeight: 1.7,
                margin: 0,
              }}>{bullet}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "16px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          {iconItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const } },
                }}
                whileHover={{
                  backgroundColor: "rgba(201,168,76,0.06)",
                  borderColor: "rgba(201,168,76,0.25)",
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "14px",
                  padding: "28px 20px",
                  backgroundColor: "rgba(42,42,53,0.4)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "16px",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Icon size={22} color="#C9A84C" strokeWidth={1.5} />
                </div>

                <p style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FAF8F5",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}>{item.label}</p>

                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "13px",
                  color: "rgba(239,236,226,0.55)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div style={{
          width: "48px",
          height: "1px",
          backgroundColor: "rgba(201,168,76,0.3)",
          margin: "0 auto",
        }} />
      </div>
    </section>
  );
}
