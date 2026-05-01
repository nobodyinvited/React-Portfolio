import { profile } from "../../data/profile";

export default function Link() {
  return profile.links.map((item) => (
      <a
        key={item.type}
        className="hover:text-blue-600 transition-all cursor-pointer"
        href={item.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <item.Icon stroke={2}/>
      </a>
  ));
}
