export default function Button({ name, linkTo = "#", icon = "" }) {
  return (
    <a
      className="border-2 text-blue-600 border-blue-600 px-5 py-1.5 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition flex flex-row gap-1 items-center"
      href={linkTo}
      target="_blank"
      rel="noreferrer"
    >
      <span>{name}</span>
      {icon && <span>{icon}</span>}
    </a>
  );
}
