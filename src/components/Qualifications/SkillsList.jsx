import { profile } from "../../data/profile";

export default function SkillsList({ category = "" }) {
  const skills = profile.skills?.[category];

  if (!skills) return null;

  const formattedCategory = category
    .replaceAll("_", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="py-2 flex flex-col gap-2">
      <h3 className="text-gray-500 font-medium text-sm tracking-wide">
        {formattedCategory}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm
                       hover:bg-gray-50 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
