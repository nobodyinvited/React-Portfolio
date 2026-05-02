import { profile } from "../../data/profile";
import { navLink, navTitle } from "../../data/navbar";

import Hashtags from "./components/Hashtags";
import CodeSnippet from "./components/CodeSnippet";
import Achievements from "./components/Achievements";
import Section from "../Section/Section";

export default function Info() {
  return (
    <Section
      id={navLink.about}
      title={navTitle.About}
      subtitle="My introduction"
    >
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
    </Section>
  );
}
