"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 pt-24 pb-16 bg-[#080c10] relative overflow-hidden">
      <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(230,184,74,0.07)_0%,transparent_65%)] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-150px] left-[-50px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.05)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none" />
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        <div className="flex-1 flex flex-col animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full font-mono text-[0.72rem] mb-6 tracking-wide w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink" />
            Disponible pour missions freelance
          </div>
          <p
            className="font-mono text-[0.85rem] text-gold mb-3 tracking-widest animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
             Bonjour, je suis
          </p>
          <h1
            className="font-syne font-black text-5xl md:text-7xl leading-none tracking-tight mb-4 text-white animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Somrani
            <br />
            <span className="text-gold">Olfa</span>
          </h1>
          <p
            className="font-syne text-xl md:text-2xl text-[#9ca3af] tracking-tight mb-5 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Ingénieure{" "}
            <strong className="text-gold font-bold">Full-Stack</strong>
            <br />& Formatrice ( pack office / web)
          </p>
          <p
            className="text-base text-[#6b7280] leading-relaxed max-w-md mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Je conçois et développe des applications web modernes, scalables et
            performantes. De l'idée à la production — je couvre tout le stack.
            J’anime également des formations en Pack Office (Word, Excel,
            PowerPoint) et en développement web, adaptées à tous les niveaux.
          </p>
          <div
            className="flex flex-wrap gap-3 mb-10 animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-lg font-syne font-bold text-[0.95rem] hover:bg-gold2 hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_24px_rgba(230,184,74,0.3)]"
            >
              Voir mes projets →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-syne font-medium text-[0.95rem] text-[#9ca3af] border border-white/10 hover:border-gold hover:text-gold transition-all"
            >
              Me contacter
            </a>
          </div>
          <div
            className="flex gap-8 pt-6 border-t border-white/[0.06] animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { val: "2+", label: "ans d'expérience" },
              { val: "8+", label: "projets livrés" },
              { val: "10+", label: "outils & frameworks" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-syne font-black text-3xl text-white">
                  {s.val}
                </div>
                <div className="font-mono text-[0.72rem] text-[#4b5563] mt-1 tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col gap-5 items-center lg:items-end animate-fadeInUp"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="relative animate-floatA">
            <div className="absolute inset-0 rounded-2xl bg-gold/10 blur-2xl scale-110 pointer-events-none" />
            <div className="relative w-52 h-52 md:w-94 md:h-64 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(230,184,74,0.12)]">
              <Image
                src="/avatar1.png"
                alt="somrani olfa"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/40 to-transparent" />
            </div>
            <div className="absolute -top-3 -left-3 bg-[#111820] border border-white/10 rounded-xl px-2.5 py-1.5 shadow-xl font-mono text-[0.65rem] flex items-center gap-1.5 whitespace-nowrap animate-floatB">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[#9ca3af]">Open to work</span>
            </div>
          </div>
          <div className="w-[320px] md:w-[380px] bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] animate-floatB">
            <div className="bg-[#1a2030] px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[0.7rem] text-[#4b5563] ml-auto">
                portfolio.config.ts
              </span>
            </div>
            <div className="p-4 font-mono text-[0.78rem] leading-7">
              <div>
                <span className="text-blue-400">const </span>
                <span className="text-gold">developer</span>
                <span className="text-[#9ca3af]"> = {"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">Full_name</span>
                <span className="text-[#9ca3af]">: </span>
                <span className="text-green-400">Somrani olfa</span>
                <span className="text-[#9ca3af]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">role</span>
                <span className="text-[#9ca3af]">: </span>
                <span className="text-green-400">"Ingénieure Full-Stack"</span>
                <span className="text-[#9ca3af]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">email</span>
                <span className="text-[#9ca3af]">: </span>
                <span className="text-green-400">olfaasomrani@gmail.com</span>
                <span className="text-[#9ca3af]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">stack</span>
                <span className="text-green-400">"Next.js"</span>
                <span className="text-[#9ca3af]">, </span>
                <span className="text-green-400">"TypeScript"</span>
                <span className="text-[#9ca3af]">, </span>
                <span className="text-green-400">"Nest.js"</span>
                <span className="text-[#9ca3af]">,</span>
              </div>
              <div className="pl-8">
                <span className="text-[#4b5563]">{"// AI / vision"}</span>
              </div>
              <div className="pl-8">
                <span className="text-green-400">"Python"</span>
                <span className="text-[#9ca3af]">, </span>
                <span className="text-green-400">"PyTorch"</span>
                <span className="text-[#9ca3af]">, </span>
                <span className="text-green-400">"YOLO"</span>
                <span className="text-[#9ca3af]">, </span>
                <span className="text-green-400">"LLM"</span>
                <span className="text-[#9ca3af]">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">location</span>
                <span className="text-[#9ca3af]">: </span>
                <span className="text-green-400">"Tunis, TN"</span>
              </div>
              <div>
                <span className="text-[#9ca3af]">{"}"}</span>
                <span className="inline-block w-2 h-4 bg-gold align-middle animate-cursor ml-0.5" />
              </div>
            </div>
          </div>

          {/* ── Deploy badge ── */}
          <div className="bg-[#111820] border border-white/10 rounded-xl px-3 py-2 shadow-xl font-mono text-[0.68rem] flex items-center gap-2 whitespace-nowrap self-start animate-floatA">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[#9ca3af]">git push → deployed ✓</span>
            <span className="ml-2 text-[#4b5563]">|</span>
            <span className="text-[#9ca3af]">100% tests passing</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatA {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatB {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes cursor {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease both;
        }
        .animate-floatA {
          animation: floatA 4s ease-in-out infinite;
        }
        .animate-floatB {
          animation: floatB 5s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1.2s ease-in-out infinite;
        }
        .animate-cursor {
          animation: cursor 0.8s step-end infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
