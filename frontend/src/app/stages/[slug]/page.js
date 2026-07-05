"use client";

import { use, useEffect, useState } from "react";
import api from "@/services/api";
import CodeEditor from "@/components/CodeEditor";
import { auth } from "@/services/firebase";

export default function StagePage({ params }) {

  const { slug } = use(params);

  const [stage, setStage] = useState(null);
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {

    async function fetchStage() {

      const res = await api.get(`/stages/${slug}`);

      setStage(res.data);

      setCode(res.data.starterCode || "");

    }

    fetchStage();

  }, [slug]);

  if (!stage)
    return (
      <h1 className="text-white p-10">
        Loading...
      </h1>
    );

    const submitCode = async () => {

  try {

    const res = await api.post("/review", {
      uid: auth.currentUser.uid,
      stage: stage.slug,
      code,
      challenge: stage.challenge,

    });

    setReview(res.data.review);

  } catch (err) {

    console.log(err);

  }

};

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">
        {stage.title}
      </h1>

      <p className="mt-4 text-xl text-zinc-300">
        {stage.description}
      </p>

      {/* Theory */}

      <div className="mt-10">

        <h2 className="text-3xl font-bold text-purple-400">
          Theory
        </h2>

        <p className="mt-3 text-lg">
          {stage.theory}
        </p>

      </div>


      <div className="mt-10">

        <h2 className="text-3xl font-bold text-purple-400">
          Syntax
        </h2>

        {stage.syntax?.map((item, index) => (

          <pre
            key={index}
            className="bg-zinc-900 p-4 rounded-lg mt-3 overflow-x-auto"
          >
            {item}
          </pre>

        ))}

      </div>


      <div className="mt-10">

        <h2 className="text-3xl font-bold text-purple-400">
          Examples
        </h2>

        {stage.examples?.map((item, index) => (

          <pre
            key={index}
            className="bg-zinc-900 p-4 rounded-lg mt-3 overflow-x-auto"
          >
            {item}
          </pre>

        ))}

      </div>

      <div className="mt-10">

        <h2 className="text-3xl font-bold text-purple-400">
          Quiz
        </h2>

        <h3 className="mt-4 text-xl">
          {stage.quiz?.[0]?.question}
        </h3>

        <ul className="mt-4 space-y-2">

          {stage.quiz?.[0]?.options?.map((option, index) => (

            <li
              key={index}
              className="border border-zinc-700 rounded-lg p-3"
            >
              {option}
            </li>

          ))}

        </ul>

      </div>


      <div className="mt-10">

        <h2 className="text-3xl font-bold text-purple-400">
          Coding Challenge
        </h2>

        <p className="mt-3">
          {stage.challenge}
        </p>

      </div>

      <CodeEditor
        code={code}
        setCode={setCode}
      />


      <button
  onClick={submitCode}
  className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
>
  Submit Solution
</button>

{review && (
  <div className="mt-10">
    <h2 className="text-3xl font-bold text-purple-400">
      AI Review
    </h2>

    <div className="mt-4 bg-zinc-900 rounded-xl p-6 whitespace-pre-wrap">
      {review}
    </div>
  </div>
)}

    </main>

  );

}