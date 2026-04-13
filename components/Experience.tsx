const experiences = [
  {
    num: "▲",
    date: "2023 → Présent",
    role: "Développeuse Full-Stack",
    company: "Eyotech — Tunis",
    desc: "Architecture et développement, intégration de solutions IA dans les produits existants, déployement.",
  },
  {
    num: "▲",
    date: "2022 → 2023",
    role: "Développeur Full-Stack",
    company: "ImaginePartners",
    desc: "Développement d'applications web pour clients locaux et internationaux, spécialisation en React/Node.js et optimisation des performances.",
  },
  {
    num: "▲",
    date: "2022 → 2025",
    role: "Formatrice pack office & web",
    company: "Académie, Nos, (centre de formation français) - En ligne",
    desc: "Formation en ligne de apprenants sur les outils Pack Office (Word, Excel, PowerPoint) et les bases du développement web. Conception de supports pédagogiques, suivi personnalisé des apprenants et animation de sessions live pour un centre de formation français.",
  },
  {
    num: "▲",
    date: "mars 2021 - octobre 2021",
    role: "Stage PFE Ingénieur",
    company: "Inetum — Tunis",
    desc: "Développement d'un système de gestion des stages interne, APIs REST, et formation en méthodologies Agile/Scrum.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0d1117] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-syne font-black text-4xl md:text-5xl text-white tracking-tight mb-12">
          Mon <span className="text-gold">parcours</span>
        </h2>

        <div className="max-w-2xl relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold to-transparent" />
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group grid grid-cols-[32px_1fr] gap-5 pb-10"
            >
              <div className="w-8 h-8 rounded-full bg-[#111820] border-2 border-white/10 flex items-center justify-center font-mono text-[0.65rem] text-gold relative z-10 mt-1 group-hover:bg-gold/10 group-hover:border-gold transition-all">
                {exp.num}
              </div>
              <div>
                <div className="font-mono text-[0.72rem] text-gold mb-1.5 tracking-wide">
                  {exp.date}
                </div>
                <div className="font-syne font-bold text-white text-base mb-1">
                  {exp.role}
                </div>
                <div className="text-[0.85rem] text-[#9ca3af] mb-2">
                  {exp.company}
                </div>
                <div className="text-[0.875rem] text-[#6b7280] leading-relaxed">
                  {exp.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
