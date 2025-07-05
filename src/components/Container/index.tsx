import * as React from "react";

export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="max-w-4xl mx-auto px-6 lg:px-8">{children}</div>;
};

export const ContainerFluid: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="px-6 lg:px-8">{children}</div>;
};