import { profile } from "../../data/profile";

export function Button({
  children,
  href = "#",
  onClick,
  icon,
  className = "",
}) {
  const baseStyles = `
        inline-flex w-fit items-center gap-2
        px-5 py-1.5
        rounded-sm
        bg-blue-700 dark:bg-blue-400 text-white
        transition
        ${className}
      `;

  return onClick ? (
    <button onClick={onClick} className={baseStyles}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  ) : (
    <a
      href={href ?? "#"}
      target="_blank"
      rel="noreferrer"
      className={baseStyles}
    >
      {children}
      {icon && <span>{icon}</span>}
    </a>
  );
}

export function ExtendedButtonLinks() {
  return (
    <div className="grid grid-cols-3 sm:flex-row flex-wrap gap-3">
      {profile.links.map((item) => (
        <Button
          key={item.type}
          href={item.url}
          icon={<item.Icon stroke={2} />}
          className="justify-center"
        >
          {item.type}
        </Button>
      ))}
    </div>
  );
}
