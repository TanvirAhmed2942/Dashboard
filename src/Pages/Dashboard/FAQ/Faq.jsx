import React from "react";

export default function Faq() {
  const questions = [
    {
      q: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, recusandae!",
    },
    {
      q: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, recusandae!",
    },
    {
      q: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, recusandae!",
    },
    {
      q: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, recusandae!",
    },
    {
      q: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, recusandae!",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 p-10">
      {questions.map((question) => (
        <div
          key={question.q}
          className="h-14 bg-gray-200 flex items-center justify-start gap-3 rounded-md px-10 cursor-pointer hover:bg-slate-300"
          onClick={() => console.log()}
        >
          <h2 className="text-lg font-medium text-gray-700">
            Question {question.q}:
          </h2>
          <p className="text-sm text-gray-500">{question.title}</p>
        </div>
      ))}
    </div>
  );
}
