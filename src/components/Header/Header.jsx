import { profile } from "../../data/profile";

import List from "./List";
import ModifyTheme from "./ModifyTheme";
import { SocialLinks } from "./SocialLinks";

export default function Header() {
  return (
    <header className="hidden md:grid grid-cols-3 items-center bg-white border-b border-b-gray-200 p-5 fixed w-full dark:bg-[#282828] dark:text-white dark:border-0">
      {/* Left-sided logotype */}
      <div className="text-center">
        <h1 className="font-semibold text-xl">
          <a href="#">{profile?.name?.split(" ")[0] ?? "Serhii"}</a>
        </h1>
      </div>
      {/* Middle-sided navbar elements */}
      <div className="flex justify-center">
        <nav>
          <ul className="flex flex-row gap-4">
            <List />
          </ul>
        </nav>
      </div>
      {/* Right-sided navbar elements */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex flex-row gap-3">
          <SocialLinks />
        </div>
        <ModifyTheme />
      </div>
    </header>
  );
}
