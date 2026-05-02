export default function Section({ id, title, subtitle, children}) {
  return (
    <section className="p-8 flex flex-col gap-2" id={id}>
      <h2 className="text-black font-bold text-center text-5xl">{title}</h2>
      <p className="text-center text-gray-400 text-xl">{subtitle}</p>
      {children}
    </section>
  );
}
