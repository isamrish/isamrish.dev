"use client";

import * as React from "react";
import Head from "../../src/components/Head";

const LearningPage = () => {

  return (
    <>
      <Head title="Learning List" />
      <h2 className="text-2xl pt-4 ">Learning</h2>
      <p className="text-base">This is list of items which I am learning.</p>

      <h3 className="text-xl pt-4">Paper</h3>
      <ul className="mb-6">
        <li>
          <a
            href="https://arxiv.org/pdf/2506.02153"
            target="_blank"
            className="text-blue-500"
          >
            Small Language Models are the Future of Agentic AI
          </a>{" "}
          [ToDo] [Learning Notes]
        </li>
      </ul>
    </>
  );
};

export default LearningPage;
