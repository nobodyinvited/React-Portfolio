import { ReactTyped } from "react-typed";
import { profile } from "../data/profile";
import { IconUser } from "@tabler/icons-react";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
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
              <Button name="Explore CV" linkTo="./cv.pdf" />
              <Button
                name="Hire Me!"
                linkTo="https://linkedin.com/in/syatsunenko/"
                icon={<IconUser stroke={2} />}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Button({ name, linkTo, icon }) {
  return (
    <div className="border-2 text-blue-600 border-blue-600 px-5 py-1.5 hover:border-blue-700 hover:bg-blue-700 hover:text-white transition flex flex-row gap-1 items-center">
      <a
        className=""
        href={linkTo}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <a href="">{icon ?? "/>"}</a>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="w-100 rounded-full border-2 border-gray-200"
      src="/example.jpg"
      alt={profile.name}
    />
  );
}
