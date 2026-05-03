import { profile } from "../../data/profile";

import Button from "./Button";
import List from "./List";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="flex flex-row justify-around items-center bg-white border-b border-b-gray-200 p-5 fixed w-full">
      {/* Left-sided logotype */}
      <div className="text-center">
        <h1 className="font-semibold text-xl">
          <a href="#">{profile?.name?.split(" ")[0] ?? "Serhii"}</a>
        </h1>
      </div>
      {/* Middle-sided navbar elements */}
      <div>
        <nav>
          <ul className="flex flex-row gap-4">
            <List />
          </ul>
        </nav>
      </div>
      {/* Right-sided navbar elements */}
      <div className="flex flex-row gap-4 items-center">
        <Button>Test</Button>
        {/* Social media elements */}
        <div className="flex flex-row gap-3">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
