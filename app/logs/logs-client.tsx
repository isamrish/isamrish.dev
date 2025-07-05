"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "../../src/components/Search";
import { LogMetadata } from "@/lib/logs";

interface LogsClientComponentProps {
  logs: LogMetadata[];
}

export const LogsClientComponent = ({ logs }: LogsClientComponentProps) => {
  const [search, setSearch] = React.useState("");
  
  // Filter logs based on search
  const filteredLogs = logs.filter(log => 
    (log.title?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (log.category?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (log.tags || []).some(tag => tag?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Logs</h2>
      <p className="text-muted-foreground mb-6">
        <strong>Notes:</strong> Logs of what I'm working on and learning...
      </p>
      
      <Search search={search} setSearch={setSearch} />
      
      <div className="space-y-6 mt-8">
        {filteredLogs.map((log) => (
          <article key={log.slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <Link href={`/logs/${log.slug}`} className="block">
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                {log.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                <time dateTime={log.date}>
                  {new Date(log.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="px-2 py-1 bg-muted rounded-full text-xs">
                  {log.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {log.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted/50 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
        
        {filteredLogs.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No logs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};