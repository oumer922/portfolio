import Link from "next/link";

export default function ProjectDetail() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-12 md:py-16 font-sans selection:bg-sky-500/30 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Compact Back Link */}
        <Link href="/#hero" className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-200 text-xs font-mono uppercase tracking-[0.2em] mb-8 transition-colors">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 tracking-tighter leading-tight">
            Dubai Hotels Analytics
          </h1>
          <div className="flex flex-wrap gap-2">
            {["Power BI", "SQL", "Power Query", "DAX", "Data Modeling"].map((t) => (
              <span key={t} className="px-2.5 py-1 bg-slate-900 text-slate-400 rounded text-[10px] font-mono uppercase tracking-widest border border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Tightened spacing between sections */}
        <div className="space-y-16">
          
          {/* Step 01: The Problem */}
          <section className="grid md:grid-cols-12 gap-8 items-center border-t border-slate-900 pt-12">
            <div className="md:col-span-5">
              <h2 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-sky-500/50"></span>
                01 // Input
              </h2>
              <h3 className="text-xl font-bold text-slate-100 mb-3">144 Raw CSV Files</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                Processing 12 years of monthly reports (2013-2025). The data arrived unstructured with varying headers and inconsistent date schemas that blocked direct analysis.
              </p>
            </div>
            <div className="md:col-span-7 bg-slate-900/40 border border-slate-800 rounded-xl p-5 font-mono text-[10px] text-slate-500 overflow-hidden shadow-xl">
              <p className="text-red-400/80 mb-1">Date, Hotel_ID, Cat_Type, Occ_%, Rev_Local</p>
              <p>01/01/2013, DXB_01, Luxury, 78.2, 1250</p>
              <p>02-2013, DXB_01, Luxury, 74.1, 1180</p>
              <p className="mt-2 text-slate-700 italic">// 144 fragments normalized</p>
            </div>
          </section>

          {/* Step 02: ETL */}
          <section className="grid md:grid-cols-12 gap-8 items-center border-t border-slate-900 pt-12">
            <div className="md:col-span-7 md:order-2">
              <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-emerald-500/50"></span>
                02 // ETL
              </h2>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Automated Pipeline</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                I built a Power Query transformation to unpivot metrics and standardize date formats into a unified <code className="text-sky-400">DD/MM/YYYY</code> schema, enabling temporal forecasting.
              </p>
            </div>
            <div className="md:col-span-5 md:order-1 border border-slate-800 bg-slate-900/30 rounded-xl overflow-hidden shadow-lg aspect-video relative">
              <img src="/dubai-etl.png" alt="ETL" className="w-full h-full object-cover opacity-80" />
            </div>
          </section>

          {/* Step 03: Modeling */}
          <section className="grid md:grid-cols-12 gap-8 items-center border-t border-slate-900 pt-12">
            <div className="md:col-span-5">
              <h2 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-sky-500/50"></span>
                03 // Architecture
              </h2>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Star Schema</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                Implemented a relational model separating Facts (Occupancy) from Dimensions (Hotel Category, Date), reducing report latency to sub-second response times.
              </p>
            </div>
            <div className="md:col-span-7 border border-slate-800 bg-slate-900/30 rounded-xl overflow-hidden shadow-lg p-4 flex justify-center aspect-video relative">
              <img src="/dubai-model.png" alt="Star Schema" className="w-full h-full object-contain opacity-80" />
            </div>
          </section>
          
          

          {/* Step 04: DAX Logic */}
          <section className="border-t border-slate-900 pt-12 max-w-3xl">
            <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.3em] mb-3">04 // Logic</h2>
            <h3 className="text-xl font-bold text-slate-100 mb-4">DAX Measures</h3>
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 font-mono text-xs md:text-sm text-slate-400 leading-relaxed">
              <span className="text-emerald-400">RevPAR_YoY</span> = <br/>
              <span className="pl-4 block">
                VAR Current = [Total_RevPAR]<br/>
                VAR Previous = CALCULATE([Total_RevPAR], SAMEPERIODLASTYEAR('Calendar'[Date]))<br/>
                RETURN DIVIDE(Current - Previous, Previous, 0)
              </span>
            </div>
          </section>

          {/* Step 05: Impact */}
          <section className="border-t border-slate-900 pt-12 pb-16">
            <div className="mb-8">
              <h2 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] mb-3">05 // Result</h2>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">22% Recovery Growth</h3>
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                The analysis pinpointed a luxury market recovery speed outperforming mid-tier segments by 22%, shifting marketing spend to high-ROI channels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
              <img src="/dubai-dashboard.png" alt="Final Dashboard" className="w-full h-auto opacity-95" />
            </div>
          </section>

          {/* Compact CTA */}
          <section className="text-center py-12 border-t border-slate-900">
            <a href="mailto:oumerhussein92@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
              Discuss This Project
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>
          
        </div>
      </div>
    </main>
  );
}