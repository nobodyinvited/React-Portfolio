import { profile } from "../../data/profile";

import Hashtags from "./Hashtags";
import CodeSnippet from "./CodeSnippet";
import Achievements from "./Achievements";

export default function Info() {
  return (
    <section className="p-8 flex flex-col gap-2 " id="about">
      <h2 className="text-black font-bold text-center text-5xl">About me</h2>
      <p className="text-center text-gray-400 text-xl">My introduction</p>
      {/* Full layout */}
      <div className="flex justify-between w-full gap-8 px-48 py-16">
        <div className="shrink-0">
          <CodeSnippet />
        </div>
        {/* Right-sided layout */}
        <div className="w-165 flex flex-col gap-4 text-xl">
          {/* Description */}
          <p className="text-gray-700">{profile.description}</p>
          {/* Hashtags */}
          <Hashtags />
          {/* Achievements */}
          <div className="flex justify-center flex-row gap-7 pt-6">
            <Achievements />
          </div>
        </div>
      </div>
    </section>
  );
}
