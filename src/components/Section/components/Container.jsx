export default function Container({
  title = "",
  icon = null,
  description = "",
  children,
}) {
  return (
    <div className="w-full p-8 bg-white dark:bg-[#16161681] shadow-md rounded-2xl border border-gray-200 dark:border-[#161616] hover:scale-105 transition-all">
      <div className="flex items-center gap-2 py-2 text-blue-600 dark:text-blue-400">
        <h2 className="font-semibold text-3xl">{title}</h2>
        {icon && <div>{icon}</div>}
      </div>
      <p className="text-gray-400 dark:text-gray-100">{description}</p>
      <div className="py-2 flex-1">{children}</div>
    </div>
  );
}
