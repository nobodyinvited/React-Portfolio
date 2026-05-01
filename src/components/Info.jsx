import SyntaxHighlighter from "react-syntax-highlighter";

import { profile } from "../data/profile";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Info() {
  return (
    <section className="p-8 flex flex-col gap-2 " id="about">
      <h2 className="text-black font-bold text-center text-3xl">About me</h2>
      <p className="text-center text-gray-400">My introduction</p>
      <div className="flex justify-between w-full gap-8 px-48 py-16">
        <CodeSnippet />
        <div className="w-165 flex flex-col gap-4 text-xl">
          <p className="text-gray-700">{profile.description}</p>
          <div className="flex flex-row gap-4 ">
            <p>#developer</p>
            <p>#student</p>
            <p>#readytowork</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeSnippet() {
  const code = `const aboutMe = [
  name: "Serhii Yatsunenko",
  location: "Bonn, Germany",
  occupation: "Frontend Web Developer",
  hobbies: ["code", "learning", "music"],
  languages: ["ukrainian", "english", "french"]
]`;

  return (
    <div className="rounded-xl overflow-hidden shadow-xl w-120">
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        customStyle={{ padding: "24px", backgroundColor: "#1e2330" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
