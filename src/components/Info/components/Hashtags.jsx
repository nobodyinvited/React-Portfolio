import { profile } from "../../../data/profile";

export default function Hashtags() {
  return (
    <>
      <div className="flex flex-row gap-4 ">
        {profile.hashtags.map((tag) => (
          <p key={tag} className="text-blue-600 font-medium border-b ">
            #{tag}
          </p>
        ))}
      </div>
    </>
  );
}
