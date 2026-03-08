export default function Footer() {
  return (
    <footer className="w-full py-16 bg-slate-950 border-t border-slate-900/50 text-center">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex gap-8 mb-12">
          <a href="https://github.com/oumer922" target="_blank" rel="noreferrer" className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] hover:text-sky-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/oumerahmed" target="_blank" rel="noreferrer" className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] hover:text-sky-400 transition-colors">LinkedIn</a>
          <a href="mailto:oumerhussein92@gmail.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] hover:text-sky-400 transition-colors">Email</a>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-medium">
          © 2026 Oumer Hussen Ahmed
        </p>
      </div>
    </footer>
  );
}