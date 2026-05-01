import { profile } from "../../data/profile";

import Button from "./Button";
import List from "./List";
import Link from "./Links";

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
        <Button children="Send an email" />
        {/* Social media elements */}
        <div className="flex flex-row gap-3">
          <Link/>
          {/* <a
            className="hover:text-blue-600 transition-all"
            href={profile?.link?.github && "https://github.com/nobodyinvited"}
            rel="noopener noreferrer"
            target="_blank"
          >
          </a>
          <a
            className="hover:text-blue-600 transition-all"
            href={profile?.link?.github && "https://github.com/nobodyinvited"}
            rel="noopener noreferrer"
            target="_blank"
          >
          </a>
          <a
            className="hover:text-blue-600 transition-all"
            href="https://t.me/wxsmrzx"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a> */}
          
        </div>
      </div>
    </header>
  );
}
