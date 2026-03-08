export default function ProjectsGrid() {
  return (
    <section id="projects" className="w-full py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-10">Featured Project</h2>
        <div className="group grid md:grid-cols-2 gap-8 items-center border border-slate-800 bg-slate-900/50 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all">
          <div>
            <h3 className="text-3xl font-bold text-slate-100 mb-4">Dubai Hotels Analytics</h3>
            <p className="text-slate-400 text-sm mb-8">
              I cleaned 12 years of fragmented CSV files and built a Star Schema model to track revenue. The dashboard identified a 22% faster recovery in luxury hotels, helping stakeholders move their budget to the right places.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Power BI", "SQL", "Modeling"].map((t) => (
                <span key={t} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] font-mono text-slate-400 uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <a href="/projects/dubai-hotels-analytics" className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest hover:text-sky-400 transition-colors">
              View Project &rarr;
            </a>
          </div>
          <a href="/projects/dubai-hotels-analytics" className="block rounded-xl border border-slate-800 bg-slate-950 overflow-hidden h-64 relative group">
            <img src="/dubai-dashboard.png" alt="Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}