export default function Contact() {
  return (
    <section id="contact" className="bg-[#080c10] py-24 px-6 md:px-12 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-syne font-black text-5xl md:text-6xl text-white tracking-tight mb-4 leading-none">
          Travaillons<br />
          <span className="text-gold">ensemble</span>
        </h2>
        <p className="text-[#9ca3af] text-base leading-relaxed mb-10">
          Disponible pour des missions freelance, des projets SaaS, ou des postes full-time. Parlons de votre projet.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          
            <a href="mailto:votre@email.com"
            className="inline-flex items-center gap-2 bg-gold text-[#080c10] px-6 py-3 rounded-lg font-mono text-[0.8rem] font-bold hover:bg-gold2 transition-all"
          >
            ✉ m'envoyer un email
          </a>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/olfaa-somrani-8637691a2/" },
            { label: "{ } GitHub", href: "#" },
            { label: "↓ Télécharger CV", href: "#" },
          ].map((btn) => (
            
             <a key={btn.label}
              href={btn.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-[0.8rem] text-[#9ca3af] border border-white/10 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all"
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}