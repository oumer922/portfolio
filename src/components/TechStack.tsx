export default function TechStack() {
  const groups = [
    { title: "Data Analytics", list: ["Power BI", "DAX", "Power Query", "Excel"] },
    { title: "Engineering", list: ["SQL", "ETL Pipelines", "Data Modeling"] },
    { title: "Web Dev", list: ["Next.js", "React", "TypeScript", "Tailwind"] }
  ];

  return (
    <section className="w-full py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-10">Skills & Tools</h2>
        <div className="border border-slate-800 bg-slate-900/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {groups.map((g, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-[11px] font-bold text-sky-500 uppercase tracking-widest border-b border-slate-800 pb-3">{g.title}</h3>
                <ul className="space-y-3">
                  {g.list.map((s, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-400 group cursor-default">
                      <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-sky-500 transition-colors" />
                      <span className="group-hover:text-slate-200 transition-colors">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}