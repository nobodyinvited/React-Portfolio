import { navbar } from "../../../data/navbar";

export default function NavbarList() {
  return navbar.map((item) => (
    <li key={item.title}>
      <a
        className="text-black hover:text-blue-700 transition-all font-medium"
        href={item.link}
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
    </li>
  ));
}
