import { profile } from "../../data/profile";

export default function SkillsList({ category = "Unknown" }) {
  return (
    <div className="py-1">
      <h3 className="text-gray-500 font-medium capitalize">{category.replace("_", " ")}</h3>
        <ul className="flex flex-row gap-1.5 flex-wrap">
          {profile.skills[category.toLowerCase()].map((skill) => (
            <li
              key={skill}
              className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
    </div>
  );
}
