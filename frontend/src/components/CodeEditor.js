"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
}) {
  return (
    <div className="mt-8">

      <h2 className="text-4xl font-bold text-purple-500 mb-5">
        Coding Assessment
      </h2>

      <Editor
        height="500px"
        defaultLanguage="html"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />

    </div>
  );
}