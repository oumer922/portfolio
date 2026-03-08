export default function Hero() {
  return (
    <section id="hero" className="w-full pt-32 pb-24 relative bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tighter mb-6 leading-[1.1]">
              I turn messy data <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                into clear decisions.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 font-light mx-auto md:mx-0">
              Hi, I'm <strong className="text-slate-200 font-medium">Oumer Hussen Ahmed</strong>. I'm a Data Analyst with a Software Engineering background. I focus on Power BI, SQL, and making sure the data models behind the charts actually work.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a 
  href="#projects" 
  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-100 text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-transform hover:scale-105"
>
  <span className="relative z-10 flex items-center gap-2">
    View Projects
    {/* Downward Arrow SVG */}
    <svg 
      className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </span>
</a>
              <a href="mailto:oumer@example.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 rounded-full font-bold text-xs uppercase tracking-widest hover:border-slate-600 transition-all">
                Contact
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0 group">
            <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full rounded-full border border-slate-800 overflow-hidden bg-slate-900">
              <img src="/profile.jpg" alt="Oumer" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}