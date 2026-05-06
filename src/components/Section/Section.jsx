export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-12 md:py-20 px-4">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-black">{title}</h2>

        <p className="text-gray-500 text-base md:text-xl mt-2">{subtitle}</p>
      </div>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </section>
  );
}
