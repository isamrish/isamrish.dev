import * as React from "react";
import Head from "../../src/components/Head";
import { getAllLogsMetadata } from "@/lib/logs";
import { LogsClientComponent } from "./logs-client";

const LogsPage = async () => {
  const logs = getAllLogsMetadata();

  return (
    <>
      <Head title="Logs" />
      <LogsClientComponent logs={logs} />
    </>
  );
};

export default LogsPage;
