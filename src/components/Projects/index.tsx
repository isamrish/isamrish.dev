import * as React from "react";
import { Project } from "../Project";

export const Projects = () => {
    return (
      <>
        <div>
          <h2>Projects</h2>
          <p>
            There are some projects that I have built, some are in building
            phase, some are in maintenance and some are in archived.
          </p>
        </div>
        <div>
          <h2>Some of projects:</h2>
          {Array.from([1, 2, 3]).map((res) => {
            return <Project key={res} />;
          })}
        </div>
      </>
    );
}