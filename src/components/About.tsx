export default function About() {
  return (
    <section className="w-full py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">
          The Story
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed mb-8">
              I’ve always been obsessed with how systems work. I started in 
              <span className="text-slate-100 font-medium"> Software Engineering</span>, but I quickly realized that the most valuable part of any application isn't just the code—it's the 
              <span className="text-sky-400 font-medium"> data</span> it leaves behind.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
              Because I know how databases are built, I know exactly how to query and model them to find the "truth" behind the numbers. I specialize in turning fragmented legacy data—like the 12 years of hospitality records in my featured project—into high-performance architectures that drive business strategy.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h4 className="text-sky-400 text-xs font-mono uppercase tracking-widest mb-2">Education</h4>
              <p className="text-slate-200 text-sm font-medium leading-relaxed">
                B.Sc. Software Engineering, ASTU (2026).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h4 className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-2">Experience</h4>
              <p className="text-slate-200 text-sm font-medium leading-relaxed">
                Data Training at Nazreth Garment SC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}