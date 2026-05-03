import { ReactTyped } from "react-typed";
import { IconUser } from "@tabler/icons-react";

import { profile } from "../../data/profile";
import Button from "./Button";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center gap-24 max-w-5xl mx-auto w-full">
          <Avatar />
          <div className="flex flex-col w-110 gap-4">
            <h2 className="font-extrabold text-blue-600 text-5xl">
              Hi, I'm {profile.name.split(" ")[0]}!
            </h2>
            <p className="text-xl">{profile.occupation}</p>
            <p className="text-black text-2xl">
              <ReactTyped strings={[profile.slogan]} typeSpeed={50} />
            </p>
            <div className="flex flex-row gap-4">
              <Button name="Explore CV" linkTo="./cv.pdf" icon="/>" />
              <Button
                name="Hire Me!"
                linkTo={profile.links[1].url}
                icon={<IconUser stroke={2} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
