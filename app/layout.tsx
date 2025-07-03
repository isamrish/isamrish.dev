import React from 'react';
import '../global.scss';
import '../reset.scss';
import '../src/components/Layout/style.scss';
import { Layout } from '../src/components/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}