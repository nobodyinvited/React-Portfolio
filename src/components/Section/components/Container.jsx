export default function Container({
  title = "",
  icon = null,
  description = "",
  children,
}) {
  return (
    <div className="w-full p-8 bg-white shadow-md rounded-2xl border border-gray-200 hover:scale-105 transition-all">
      <div className="flex items-center gap-2 py-2 text-blue-600">
        <h2 className="font-semibold text-3xl">{title}</h2>
        {icon && <div>{icon}</div>}
      </div>
      <p className="text-gray-400 py-2">{description}</p>
      <div className="flex-1">{children}</div>
    </div>
  );
}
