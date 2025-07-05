"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      style={
        {
          "--normal-bg": "hsl(222.2, 84%, 4.9%)",
          "--normal-text": "hsl(210, 40%, 98%)",
          "--normal-border": "hsl(217.2, 32.6%, 17.5%)",
          "--success-bg": "hsl(142, 76%, 36%)",
          "--success-text": "hsl(0, 0%, 100%)",
          "--error-bg": "hsl(0, 84%, 60%)",
          "--error-text": "hsl(0, 0%, 100%)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
