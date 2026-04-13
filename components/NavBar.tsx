"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[18px] bg-[#080c10]/80 backdrop-blur-lg border-b border-white/[0.06]">
      <div className="font-syne font-black text-lg text-white flex items-center gap-1">
      </div>
      <div className="hidden md:flex items-center gap-7">
        {[
          { num: "01", label: "Skills", href: "#skills" },
          { num: "02", label: "Projets", href: "#projects" },
          { num: "03", label: "Expérience", href: "#experience" },
          { num: "04", label: "Contact", href: "#contact" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-[0.8rem] text-[#6b7280] hover:text-gold transition-colors tracking-wide"
          >
            <span className="text-gold mr-1">{link.num}.</span>
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="font-mono text-[0.8rem] font-bold bg-gold text-[#080c10] px-5 py-2 rounded-md hover:bg-gold2 transition-all"
        >
          Disponible ✦
        </Link>
      </div>
    </nav>
  );
}