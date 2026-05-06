import { profile } from "../../data/profile";

export default function Hashtags() {
  return (
    <div className="flex flex-wrap gap-3">
      {profile.hashtags.map((tag) => (
        <span
          key={tag}
          className="text-blue-600 font-medium px-2 py-1 border border-blue-100 rounded-full text-sm hover:bg-blue-50 transition"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
