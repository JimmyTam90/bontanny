export default function LegalPage({ title, children }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">{title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-white [&_a]:text-brand-light [&_a]:underline">
        {children}
      </div>
    </main>
  );
}
