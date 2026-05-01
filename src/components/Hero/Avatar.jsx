import { profile } from "../../data/profile";

export default function Avatar() {
  return (
    <img
      className="w-100 rounded-full border-2 border-gray-200"
      src="/example.jpg"
      alt={profile.name}
    />
  );
}