import { profile } from "../../data/profile";

export default function Achievements() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
      {profile.achievements.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-bold text-2xl md:text-3xl text-black">
            {item.value}
          </h2>

          <p className="text-gray-600 text-sm md:text-base">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
