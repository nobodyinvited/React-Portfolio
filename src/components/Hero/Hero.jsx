import { ReactTyped } from "react-typed";
import { IconUser } from "@tabler/icons-react";

import { profile } from "../../data/profile";
import { Button } from "./Button";
import Avatar from "./Avatar";

export default function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 dark:bg-[#252525]">
      <div className="flex flex-col md:flex-row text-center items-center justify-center gap-12 max-w-5xl mx-auto w-full">
        <Avatar />

        <div className="flex flex-col text-center md:text-left max-w-md w-full gap-4">
          <h2 className="font-extrabold text-blue-600 dark:text-blue-400 text-3xl md:text-5xl">
            Hi, I'm {firstName}!
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-white">
            {profile.occupation}
          </p>

          <p className="text-lg md:text-2xl text-black dark:text-white min-h-8">
            <ReactTyped strings={[profile.slogan]} typeSpeed={50} />
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-start items-center">
            <Button href="./cv.pdf" icon="/>">
              Explore CV
            </Button>
            <Button
              href={
                profile.links?.find((l) => l.type === "LinkedIn")?.url || "#"
              }
              icon={<IconUser stroke={2} />}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
