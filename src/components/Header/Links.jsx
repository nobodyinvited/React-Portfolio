import { profile } from "../../data/profile";

export default function Link() {
  return profile.links.map((item) => (
      <a
        key={item.link}
        className="hover:text-blue-600 transition-all"
        href={item.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <item.Icon stroke={2}/>
      </a>
  ));
}
