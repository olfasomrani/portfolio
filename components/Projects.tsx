const projects = [
  {
    icon: "📄",
    iconBg: "bg-gold/10",
    name: "CV Intelligent — Générateur IA",
    desc: "Plateforme de génération de CVs intelligents avec IA. Formulaire guidé, optimisation automatique du contenu et export PDF professionnel.",
    stack: ["Next.js", "Claude API", "PostgreSQL"],
    meta: ["⭐ IA / LLM", "🚀 En cours"],
  },
  {
    icon: "🏢",
    iconBg: "bg-blue-400/10",
    name: "SIRH — Eyeotech",
    desc: "Plateforme complète de gestion RH : employés, congés & absences, fiches de paie, documents, organigramme dynamique, recrutement et reporting avancé.",
    stack: ["Next.js", "Express.js", "GraphQL", "PostgreSQL", "Sequelize"],
    meta: ["⭐ Full-Stack", "🏢 Eyeotech", "📊 RH complet"],
  },
  {
    icon: "🎓",
    iconBg: "bg-purple-400/10",
    name: "Gestion Stages & Stagiaires — PFE — Inetum",
    desc: "Application de gestion des stages développée. Suivi des stagiaires, affectations, évaluations et tableaux de bord de pilotage.",
    stack: ["Angular", "Spring Boot", "PostgreSQL"],
    meta: ["⭐ PFE", "🏢 Inetum", "📋 Gestion"],
  },
  {
    icon: "🏓",
    iconBg: "bg-green-400/10",
    name: "Ping — Analyse Vidéo Ping Pong — Eyeotech",
    desc: "Application d'analyse vidéo de matchs de ping pong en temps réel : détection du score, trajectoire de balle, type de main des joueurs via computer vision.",
    stack: ["Python", "PyTorch", "YOLO", "FastAPI", "Next.js", "SQLAlchemy"],
    meta: ["⭐ Computer Vision", "🤖 ML / IA", "⚡ Temps réel"],
  },
  {
    icon: "🌐",
    iconBg: "bg-cyan-400/10",
    name: "CMDA — Plateforme Networking",
    desc: "Plateforme professionnelle pour connecter des experts, partager des projets et accroître la visibilité métier. Architecture moderne avec API GraphQL.",
    stack: ["Next.js", "Express.js","Rest Api"],
    meta: ["⭐ Full-Stack", "🔗 Networking"],
  },
  {
    icon: "💼",
    iconBg: "bg-orange-400/10",
    name: "Recrutement IA — En cours",
    desc: "Plateforme de recrutement intelligente : espace entreprise & candidat, filtration automatique des CVs par IA, matching et suivi des candidatures.",
    stack: ["Next.js", "NestJS", "TypeScript", "IA / LLM"],
    meta: ["🚧 En cours", "🤖 IA Filtration", "💼 Recrutement"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#080c10] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[0.72rem] text-gold tracking-[2px] uppercase mb-3">// 02. Projets</p>
        <h2 className="font-syne font-black text-4xl md:text-5xl text-white tracking-tight mb-12">
          Ce que j'ai <span className="text-gold">construit</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group bg-[#111820] border border-white/[0.06] rounded-xl p-7 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 ${p.iconBg} rounded-lg flex items-center justify-center text-xl`}>
                  {p.icon}
                </div>
                <span className="text-[#6b7280] text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </div>

              <h3 className="font-syne font-bold text-white text-[1.05rem] mb-2">{p.name}</h3>
              <p className="text-[0.875rem] text-[#9ca3af] leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[0.62rem] px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[#9ca3af]">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/[0.06] font-mono text-[0.72rem] text-[#6b7280]">
                {p.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}