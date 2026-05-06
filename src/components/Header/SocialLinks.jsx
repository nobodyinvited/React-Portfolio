import { profile } from "../../data/profile";

export function SocialLinks() {
  return profile.links.slice(0, 3).map((item) => (
    <a
      key={item.type}
      className="hover:text-blue-600 transition-all cursor-pointer"
      href={item.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <item.Icon stroke={2} />
    </a>
  ));
}

export function ExtendedButtonLinks() {
  return profile.links.map((item) => (
    <a
      className="w-36 border-2 text-blue-600 border-blue-600 px-5 py-1.5 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition flex flex-row gap-1 items-center"
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <p>{item.type}</p>
      <span>
        <item.Icon stroke={2}></item.Icon>
      </span>
    </a>
  ));
}
