import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnippet() {
  const code = `const aboutMe = {
  name: "Serhii Yatsunenko",
  location: "Bonn, Germany",
  occupation: "Frontend Web Developer",
  hobbies: ["code", "learning", "music"],
  languages: ["ukrainian", "english", "french"]
};`;

  return (
    <div className="
      w-full max-w-md
      rounded-xl overflow-hidden
      shadow-xl
      bg-[#1e2330]
    ">

      {/* Top bar */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        customStyle={{
          padding: "16px",
          backgroundColor: "#1e2330",
          margin: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
}