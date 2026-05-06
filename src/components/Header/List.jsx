import { navbar } from "../../data/navbar";

export default function NavbarList() {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
      {navbar.map((item) => (
        <li key={item.title}>
          <a
            href={item.link}
            className="text-black dark:text-white hover:text-blue-700 transition font-medium"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
