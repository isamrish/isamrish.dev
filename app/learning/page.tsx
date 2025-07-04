"use client";

import * as React from "react";
import Head from "../../src/components/Head";

const LearningPage = () => {

  return (
    <>
      <Head title="Learning List" />
      <h2>Learning</h2>
      <p>
        This is list of items which I am learning.
      </p>

      <h3>Paper</h3>
      <ul>
        <li>
            <a href="https://arxiv.org/pdf/2506.02153" target="_blank">Small Language Models are the Future of Agentic AI</a> [ToDo] [Learning Notes]
        </li>
      </ul>

    </>
  );
};

export default LearningPage;
