import { profile } from "../../data/profile";

export function Button({ children, href = "#", icon, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-flex w-fit items-center gap-2
        px-5 py-1.5
        border-2 border-blue-600
        text-blue-600
        hover:bg-blue-700 hover:text-white
        transition
        ${className}
      `}
    >
      {children}
      {icon && <span>{icon}</span>}
    </a>
  );
}

export function ExtendedButtonLinks() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
