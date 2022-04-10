import Head from 'next/head';
import { WrapperProps } from './types';

export interface LayoutProps extends WrapperProps {
  title?: string;
  description?: string;
}

export default function Layout({
  title = 'Habitz',
  description = 'The AI Powered Habit Tracker',
  children,
}: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
