"use client";

import { motion, type MotionProps } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const cards = [
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
];

const fadeUp = (
  delay: number,
  duration: number,
  yFrom = 20
): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0, y: yFrom },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
});

const fadeIn = (
  delay: number,
  duration: number,
  toOpacity = 1
): Pick<MotionProps, "initial" | "animate" | "transition"> => ({
  initial: { opacity: 0 },
  animate: { opacity: toOpacity },
  transition: { duration, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-[160px] pb-[80px]">
      {/* Subtle champagne halo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* Eyebrow */}
        <motion.p
          {...fadeIn(0, 0.6)}
          className="mb-10 uppercase tracking-[0.1em] text-[#EFECE2]"
          style={{ fontFamily: "var(--font-poppins)", fontSize: "11px", opacity: 0 }}
        >
          Para empresas que crecen y necesitan entender sus números
        </motion.p>

        {/* H1 — two animated lines */}
        <div
          className="mb-12 max-w-[760px]"
          style={{ fontFamily: "var(--font-crimson-pro)", fontWeight: 600, lineHeight: 1.15 }}
        >
          <motion.div
            {...fadeUp(0.15, 0.7, 30)}
            className="text-[44px] md:text-[64px] text-[#FAF8F5]"
          >
            Los números están.
          </motion.div>
          <motion.div
            {...fadeUp(0.25, 0.7, 30)}
            className="text-[44px] md:text-[64px] text-[#FAF8F5]"
          >
            Las respuestas a tus preguntas... todavía no.
          </motion.div>
        </div>

        {/* Paragraphs */}
        <div className="max-w-[760px] space-y-8 mb-12">
          {/* Paragraph 1 */}
          <motion.p
            {...fadeUp(0.4, 0.6)}
            className="text-[16px] md:text-[18px] leading-[1.85] text-[#EFECE2]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            La información contable y financiera a la que hoy tenés acceso
            <br />
            fue construida para mirar
            <br />
            <br />
            <span style={{ color: "#C9A84C", fontWeight: 500 }}>
              hacia atrás
            </span>{" "}
            — el histórico de lo que ya pasó
            <br />
            y{" "}
            <span style={{ color: "#C9A84C", fontWeight: 500 }}>
              hacia afuera
            </span>{" "}
            — cumplir con impuestos, organismos y bancos.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.div
            {...fadeUp(0.55, 0.6)}
            className="space-y-4"
          >
            <p
              className="text-[16px] md:text-[18px] leading-[1.85] text-[#EFECE2]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              La mirada hacia adentro y hacia adelante
              <br />
              no existe todavía en tu empresa.
            </p>
            <p
              className="text-[#FAF8F5]"
              style={{
                fontFamily: "var(--font-crimson-pro)",
                fontSize: "22px",
                fontStyle: "italic",
              }}
            >
              Esa es la que construimos nosotros.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.7, 0.5)} className="mb-4">
          <a
            href="#como-trabajamos"
            className="inline-block rounded-full bg-[#C9A84C] px-8 py-3.5 text-[#0D0D12] transition-opacity hover:opacity-90"
            style={{ fontFamily: "var(--font-poppins)", fontSize: "14px", fontWeight: 500 }}
          >
            Conocé el proceso →
          </a>
        </motion.div>

        {/* Note */}
        <motion.p
          {...fadeIn(0.8, 0.5, 0.7)}
          className="mb-0 text-[#EFECE2]"
          style={{ fontFamily: "var(--font-poppins)", fontSize: "12px", opacity: 0 }}
        >
          2 semanas · Sin compromiso de continuar · El análisis queda en tu poder
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              {...fadeUp(0.9 + i * 0.1, 0.5)}
              className="rounded-[14px] bg-[#2A2A35] p-6"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="mb-[10px] uppercase text-[#C9A84C]"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                }}
              >
                {card.label}
              </p>
              <p
                className="text-[#EFECE2]"
                style={{ fontFamily: "var(--font-poppins)", fontSize: "14px", lineHeight: "1.7" }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
