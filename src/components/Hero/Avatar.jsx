import { profile } from "../../data/profile";

export default function Avatar() {
  return (
    <img
      className="
        w-40 sm:w-52 md:w-64
        aspect-square
        rounded-full
        border-2 border-gray-200
        object-cover
      "
      src="/example.jpg"
      alt={profile.name}
    />
  );
}
