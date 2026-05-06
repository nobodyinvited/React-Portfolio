import { profile } from "../../data/profile";
import { navLink, navTitle } from "../../data/navbar";

import Hashtags from "./Hashtags";
import CodeSnippet from "./CodeSnippet";
import Achievements from "./Achievements";
import Section from "../Section/Section";

export default function Info() {
  return (
    <Section
      id={navLink.about}
      title={navTitle.about_me}
      subtitle="Thinker. Builder. Collaborator."
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full px-4 md:px-10 lg:px-20">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <CodeSnippet />
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-base md:text-lg">
          <p className="text-gray-700 dark:text-gray-200">{profile.description}</p>

          <Hashtags />

          <Achievements />
        </div>
      </div>
    </Section>
  );
}
