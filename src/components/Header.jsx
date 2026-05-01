import { profile } from "../data/profile";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";

const navbar = [
    {title: "Home", link: "#"},
  { title: "About Me", link: "#about" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
  { title: "Skills", link: "#skills" },
  { title: "Contacts", link: "#contacts" },
];

export default function Header() {
  return (
    <header className="flex flex-row justify-around items-center bg-white border-b border-b-gray-200 p-5 fixed w-full">
      <div className="text-center">
        <h1 className="font-semibold text-xl">
          <a href="#">{profile?.name?.split(" ")[0] ?? "Serhii"}</a>
        </h1>
      </div>
      <div className="">
        <nav>
          <ul className="flex flex-row gap-4">
            <NavbarList />
          </ul>
        </nav>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <NavbarButton title="Send an email" />
        <div className="flex flex-row gap-3">
          <a
            className="hover:text-blue-600 transition-all"
            href="https://github.com/nobodyinvited"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub stroke={2} />
          </a>
          <a
            className="hover:text-blue-600 transition-all"
            href="https://linkedin.com/in/syatsunenko"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandLinkedin stroke={2} />
          </a>
          <a
            className="hover:text-blue-600 transition-all"
            href="https://t.me/wxsmrzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconSend stroke={2} />
          </a>
        </div>
      </div>
    </header>
  );
}

function NavbarList() {
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

function NavbarButton({ title }) {
  return (
    <a className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5" href="">
      {title}
    </a>
  );
}
