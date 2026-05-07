import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'keylinpie/site',
  description: 'Portfolio website showcasing projects and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
