export default function Container({
  title = "",
  icon = "",
  description = "",
  children,
}) {
  return (
    <div className="w-96 p-8 bg-white shadow-md rounded-2xl border border-gray-200 justify-between hover:scale-105 transition-all">
      {/* Header for each container with icon if set */}
      <div className="flex flex-row items-center gap-2 py-2 text-blue-600">
        <h2 className="font-semibold text-3xl">
          {title}
        </h2>
        <span>{icon}</span>
      </div>
      <p className="text-gray-400 py-2">
        {description}
      </p>
      {/* Customized jsx code for unique containers */}
      {children}
    </div>
  );
}
