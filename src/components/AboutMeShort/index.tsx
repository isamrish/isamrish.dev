import * as React from "react";

export const AboutMeShort: React.FC = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[480px]">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-light leading-tight">
            Hi, I'm Amrish
          </h1>
          <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground">
            I build performant web apps and developer tools.
          </h2>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://miro.medium.com/fit/c/262/262/1*OJElKbiKkdtL_OwcuA9Xsw.jpeg"
            alt="Amrish"
            className="rounded-full w-64 h-64 object-cover"
          />
        </div>
      </div>
      <p className="text-lg leading-relaxed mt-8 text-muted-foreground">
        Welcome and thanks for stopping by. I have written many articles
        primarily related to frontend development. You can check my blog on blog
        page as well. I hope that you will be benefited by those.
      </p>
    </div>
  );
};
