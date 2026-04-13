export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-[#0d1117] border-t border-white/[0.06] px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono text-[0.8rem] text-[#6b7280]">
        Ingénieure Informatique <span className="text-gold">✦</span> Tunis, TN
      </div>
      <div className="font-mono text-[0.72rem] text-[#4b5563]">
        © {date} — Tous droits réservés
      </div>
    </footer>
  );
}
