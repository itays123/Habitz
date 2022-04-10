import Head from 'next/head';
import Navbar from './navigation/Navbar';
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col md:flex-row-reverse items-stretch w-screen h-screen">
        <div className="flex-grow">{children}</div>
        <Navbar className="h-14 md:h-full md:w-48" />
      </div>
    </div>
  );
}
