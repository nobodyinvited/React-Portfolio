import { profile } from "../../data/profile";

export default function Hashtags() {
  return (
    <div className="flex flex-wrap gap-3">
      {profile.hashtags.map((tag) => (
        <span
          key={tag}
          className="text-blue-600 dark:text-blue-400 font-medium px-2 py-1 border border-blue-100 dark:border-gray-600 dark:hover:bg-[#333333] rounded-full text-sm hover:bg-blue-50 transition"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
