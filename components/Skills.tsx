const skills = [
  {
    icon: "⚛️", name: "Frontend", desc: "Interfaces modernes & réactives",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    highlight: ["Next.js", "React"],
  },
  {
    icon: "🔧", name: "Backend", desc: "APIs robustes & scalables",
    tags: ["Node.js", "NestJS", "ExpressJs", "REST", "GraphQL"],
    highlight: ["Node.js", "NestJS"],
  },
  {
    icon: "🗄️", name: "Base de données", desc: "Stockage & performance",
    tags: ["PostgreSQL","Redis", "Prisma", "TypeORM", "Sequilize", "SQLAlchemy"],
    highlight: ["PostgreSQL"],
  },
 {
  icon: "☁️", name: "DevOps & Cloud", desc: "Déploiement & infrastructure",
  tags: ["Docker", "CI/CD", "Vercel", "PM2"],
  highlight: ["Docker", "PM2"],
},
{
  icon: "🤖", name: "Intelligence Artificielle", desc: "Intégration LLMs & ML",
  tags: ["Claude API", "OpenAI", "Python", "PyTorch", "YOLO"],
  highlight: ["Claude API", "OpenAI", "PyTorch", "YOLO"],
},
  {
    icon: "🔒", name: "Sécurité & Auth", desc: "Auth, chiffrement, conformité",
    tags: ["JWT", "OAuth2", "NextAuth", "HTTPS"],
    highlight: ["JWT", "OAuth2"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0d1117] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-syne font-black text-4xl md:text-5xl text-white tracking-tight mb-12">
          Mon <span className="text-gold">stack</span> technique
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-white/[0.06] border border-white/[0.06]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-8 hover:bg-[#111820] transition-colors relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl mb-4">{skill.icon}</div>
              <div className="font-syne font-bold text-white text-base mb-1">{skill.name}</div>
              <div className="text-[0.85rem] text-[#6b7280] mb-4">{skill.desc}</div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[0.65rem] px-2.5 py-1 rounded border tracking-wide ${
                      skill.highlight.includes(tag)
                        ? "bg-gold/10 border-gold/30 text-gold"
                        : "bg-white/[0.04] border-white/10 text-[#9ca3af]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}