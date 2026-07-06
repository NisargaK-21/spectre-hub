"use client";

import { use, useEffect, useState } from "react";
import api from "@/services/api";
import CodeEditor from "@/components/CodeEditor";
import { auth } from "@/services/firebase";
import { useAuth } from "@/context/AuthContext";

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div id={id} className="scroll-mt-24 flex items-baseline gap-3">
      <span className="text-xs font-mono uppercase tracking-widest text-purple-400/70">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold text-purple-400">{title}</h2>
    </div>
  );
}

function FlashCard({ front, back, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="text-left [perspective:1000px] h-44 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl"
      aria-label={`Flashcard ${index + 1}, click to flip`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-zinc-700 bg-zinc-900 p-5 flex flex-col justify-between [backface-visibility:hidden]"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400/70">
            Card {index + 1}
          </span>
          <p className="text-lg font-semibold text-white">{front}</p>
          <span className="text-xs text-zinc-500">Tap to reveal answer</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-purple-500/50 bg-zinc-950 p-5 flex flex-col justify-between [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400/70">
            Answer
          </span>
          <p className="text-sm text-zinc-200 overflow-y-auto leading-relaxed">
            {back}
          </p>
          <span className="text-xs text-zinc-500">Tap to flip back</span>
        </div>
      </div>
    </button>
  );
}

export default function StagePage({ params }) {

  const { slug } = use(params);
  const { user } = useAuth();

  const [stage, setStage] = useState(null);
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);

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
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-2 border-zinc-700 border-t-purple-400 animate-spin" />
          <h1 className="text-2xl font-semibold text-zinc-300">Loading...</h1>
        </div>
      </main>
    );

    const submitCode = async () => {
  if (!user) {
  alert("Please login first.");
  return;
}

  try {
    const res = await api.post("/review", {
  uid: user.uid,
  stage: stage.slug,
  code,
  challenge: stage.challenge,
});

    setReview(res.data.review);
  } catch (err) {
    console.error(err);
  }
};

  const flashcards = [
    stage.theory && {
      front: `What is ${stage.title}?`,
      back: stage.theory,
    },
    ...(stage.syntax || []).map((item) => ({
      front: "Recall this syntax",
      back: item,
    })),
    ...(stage.examples || []).map((item) => ({
      front: "Recall this example",
      back: item,
    })),
    stage.quiz?.[0] && {
      front: stage.quiz[0].question,
      back: stage.quiz[0].options?.[stage.quiz[0].answer],
    },
  ].filter(Boolean);

  const quizQuestion = stage.quiz?.[0];

  const navLinks = [
    { id: "theory", label: "Theory" },
    { id: "syntax", label: "Syntax" },
    { id: "examples", label: "Examples" },
    { id: "quiz", label: "Quiz" },
    { id: "flashcards", label: "Flashcards" },
    { id: "challenge", label: "Challenge" },
  ];

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <nav className="sticky top-0 z-10 -mx-10 mb-6 border-b border-zinc-800 bg-black/80 backdrop-blur px-10 py-3">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-zinc-400 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border border-zinc-800 rounded-2xl p-8 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">

        <div className="flex flex-wrap items-center gap-3">
          {stage.difficulty && (
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/50 text-purple-300">
              {stage.difficulty}
            </span>
          )}
          {typeof stage.xp === "number" && (
            <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-700 text-zinc-300">
              {stage.xp} XP
            </span>
          )}
        </div>

        <h1 className="text-5xl font-bold mt-4">
          {stage.title}
        </h1>

        <p className="mt-4 text-xl text-zinc-300 max-w-3xl">
          {stage.description}
        </p>
      </div>

      <div className="mt-10">

        <SectionHeading eyebrow="01" title="Theory" id="theory" />

        <div className="mt-4 border border-zinc-800 rounded-xl p-6 bg-zinc-900/60">
          <p className="text-lg leading-relaxed text-zinc-200">
            {stage.theory}
          </p>
        </div>

      </div>


      <div className="mt-10">

        <SectionHeading eyebrow="02" title="Syntax" id="syntax" />

        <p className="mt-2 text-sm text-zinc-400">
          Reference snippets showing the core syntax for this stage.
        </p>

        <div className="mt-4 space-y-4">
          {stage.syntax?.map((item, index) => (
            <div key={index}>
              <span className="text-xs font-mono text-zinc-500">
                Snippet {index + 1}
              </span>
              <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mt-1 overflow-x-auto font-mono text-sm text-purple-100">
                {item}
              </pre>
            </div>
          ))}
        </div>

      </div>


      <div className="mt-10">

        <SectionHeading eyebrow="03" title="Examples" id="examples" />

        <p className="mt-2 text-sm text-zinc-400">
          Worked examples that put the syntax above into practice.
        </p>

        <div className="mt-4 space-y-4">
          {stage.examples?.map((item, index) => (
            <div key={index}>
              <span className="text-xs font-mono text-zinc-500">
                Example {index + 1}
              </span>
              <pre className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mt-1 overflow-x-auto font-mono text-sm text-purple-100">
                {item}
              </pre>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-10">

        <SectionHeading eyebrow="04" title="Quiz" id="quiz" />

        <p className="mt-2 text-sm text-zinc-400">
          Check your understanding before moving on. Select an option to see how you did.
        </p>

        <h3 className="mt-4 text-xl">
          {quizQuestion?.question}
        </h3>

        <ul className="mt-4 space-y-2">

          {quizQuestion?.options?.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = quizQuestion.answer === index;

            let stateClasses = "border-zinc-700 hover:border-purple-500/60";
            if (isSelected && isCorrect) {
              stateClasses = "border-green-500 bg-green-500/10";
            } else if (isSelected && !isCorrect) {
              stateClasses = "border-red-500 bg-red-500/10";
            } else if (selectedOption !== null && isCorrect) {
              stateClasses = "border-green-500/60";
            }

            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setSelectedOption(index)}
                  className={`w-full text-left border rounded-lg p-3 transition-colors ${stateClasses}`}
                >
                  {option}
                </button>
              </li>
            );
          })}

        </ul>

      </div>

      <div className="mt-10">

        <SectionHeading eyebrow="05" title="Revision Flashcards" id="flashcards" />

        <p className="mt-2 text-sm text-zinc-400">
          Quick flip cards to help the theory, syntax and examples stick. Click a card to flip it.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((card, index) => (
            <FlashCard
              key={index}
              index={index}
              front={card.front}
              back={card.back}
            />
          ))}
        </div>

      </div>


      <div className="mt-10">

        <SectionHeading eyebrow="06" title="Coding Challenge" id="challenge" />

        <div className="mt-4 border border-purple-500/40 rounded-xl p-6 bg-zinc-900/60">
          <p className="text-lg text-zinc-100">
            {stage.challenge}
          </p>
        </div>

      </div>

      <div className="mt-6">
        <CodeEditor
          code={code}
          setCode={setCode}
        />
      </div>


      <button
  onClick={submitCode}
  className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
>
  Submit Solution
</button>

{review && (
  <div className="mt-10">
    <SectionHeading eyebrow="07" title="AI Review" id="review" />

    <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6 whitespace-pre-wrap leading-relaxed">
      {review}
    </div>
  </div>
)}

    </main>

  );

}