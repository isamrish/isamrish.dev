import * as React from "react";
import Head from "../../src/components/Head";
import { getUsefulPromptsData } from "@/lib/useful-prompts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyableCodeBlock } from "@/components/CopyableCodeBlock";

const UsefulPromptsPage = async () => {
  const { content, ...metadata } = getUsefulPromptsData();

  return (
    <>
      <Head title="Useful Prompts" />
      <article className="max-w-4xl mx-auto py-8">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-2xl font-bold mb-4 text-foreground">
            {metadata.title}
          </h1>
          <p className="text-muted-foreground mt-4">{metadata.excerpt}</p>
        </header>

        <div className="text-muted-foreground leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-xl font-semibold text-foreground mb-4 mt-8">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-semibold text-foreground mb-3 mt-6">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-semibold text-foreground mb-2 mt-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 text-muted-foreground">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 text-muted-foreground">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              code: ({ children }) => (
                <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => {
                // Extract text content from the code element
                let codeContent = "";
                if (React.isValidElement(children) && children.props.children) {
                  codeContent =
                    typeof children.props.children === "string"
                      ? children.props.children
                      : String(children.props.children);
                }
                return <CopyableCodeBlock>{codeContent}</CopyableCodeBlock>;
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground/80 mb-4">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default UsefulPromptsPage;
