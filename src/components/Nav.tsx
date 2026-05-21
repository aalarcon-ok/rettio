"use client";

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2A35] bg-[#080D1A]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-12 py-4">
        <span
          className="text-[#FAF8F5] select-none"
          style={{ fontFamily: "var(--font-crimson-pro)", fontSize: "22px", fontWeight: 500 }}
        >
          rettio
        </span>
        <a
          href="https://wa.me/59892922583"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#197EA8] px-5 py-2 text-sm text-[#197EA8] transition-colors hover:bg-[#197EA8]/10"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
