import { profile } from "../../data/profile";

export default function Achievements() {
  return (
    <>
      {profile.achievements.map((item) => (
        <div className="flex flex-col" key={item.value}>
          <h2 className="flex flex-row justify-center font-bold text-2xl">
            {item.value}
          </h2>
          <p className="text-gray-600">{item.label}</p>
        </div>
      ))}
    </>
  );
}