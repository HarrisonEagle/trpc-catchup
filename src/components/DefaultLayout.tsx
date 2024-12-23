import Head from 'next/head';
import { createContext, type ReactNode } from 'react';
import { trpc } from '~/utils/trpc';

type DefaultLayoutProps = { children: ReactNode };

export const UserContext = createContext<string>('');

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { data } = trpc.user_id.useQuery();

  return (
    <>
      <Head>
        <title>Prisma Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <UserContext.Provider value={data ? data.user_id : 'loading'}>
          {children}
        </UserContext.Provider>
      </main>
    </>
  );
};
