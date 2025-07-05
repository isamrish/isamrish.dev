import type { MDXComponents } from 'mdx/types'
import { cn } from './lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "scroll-m-20 text-2xl font-extrabold tracking-tight mb-6 text-foreground border-b border-border pb-2",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight mb-4 mt-8 text-foreground border-b border-border pb-2",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "scroll-m-20 text-lg font-semibold tracking-tight mb-3 mt-6 text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "scroll-m-20 text-base font-semibold tracking-tight mb-2 mt-4 text-foreground",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          "scroll-m-20 text-sm font-semibold tracking-tight mb-2 mt-4 text-foreground",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          "scroll-m-20 text-xs font-semibold tracking-tight mb-2 mt-4 text-foreground",
          className
        )}
        {...props}
      />
    ),
    
    // Paragraphs and text
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "leading-7 text-muted-foreground mb-4 [&:not(:first-child)]:mt-4",
          className
        )}
        {...props}
      />
    ),
    
    // Lists
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc space-y-2 text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal space-y-2 text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={cn(
          "leading-7",
          className
        )}
        {...props}
      />
    ),
    
    // Blockquotes
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/50 py-4 pr-4 rounded-r-md",
          className
        )}
        {...props}
      />
    ),
    
    // Code
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm",
          className
        )}
        {...props}
      />
    ),
    
    // Tables
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn(
            "w-full border-collapse border border-border text-sm",
            className
          )}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead
        className={cn(
          "bg-muted",
          className
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        className={cn(
          "",
          className
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "border-b border-border hover:bg-muted/50 transition-colors",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border border-border px-4 py-2 text-left font-bold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border border-border px-4 py-2 text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    
    // Separators
    hr: ({ className, ...props }) => (
      <hr
        className={cn(
          "my-8 border-border",
          className
        )}
        {...props}
      />
    ),
    
    // Links
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
          className
        )}
        {...props}
      />
    ),
    
    // Strong and emphasis
    strong: ({ className, ...props }) => (
      <strong
        className={cn(
          "font-semibold text-foreground",
          className
        )}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em
        className={cn(
          "italic",
          className
        )}
        {...props}
      />
    ),
    
    ...components,
  }
}