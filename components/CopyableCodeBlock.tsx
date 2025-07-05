"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy, ExternalLink } from 'lucide-react';

interface CopyableCodeBlockProps {
  children: string;
}

export const CopyableCodeBlock: React.FC<CopyableCodeBlockProps> = ({ children }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      toast.success('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy to clipboard');
    }
  };

  const openInChatGPT = () => {
    const encodedPrompt = encodeURIComponent(children);
    window.open(`https://chatgpt.com/?q=${encodedPrompt}`, '_blank');
    toast.success('Opened in ChatGPT!');
  };

  return (
    <div className="mb-4">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code className="text-sm font-mono">{children}</code>
      </pre>
      <div className="flex gap-2 mt-2">
        <Button
          onClick={copyToClipboard}
          size="sm"
          variant="secondary"
          className="h-8 px-3 text-xs"
        >
          <Copy className="w-3 h-3 mr-1" />
          Copy
        </Button>
        <Button
          onClick={openInChatGPT}
          size="sm"
          variant="secondary"
          className="h-8 px-3 text-xs"
        >
          <ExternalLink className="w-3 h-3 mr-1" />
          Run in ChatGPT
        </Button>
      </div>
    </div>
  );
};