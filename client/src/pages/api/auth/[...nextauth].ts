import NextAuth, { NextAuthOptions } from 'next-auth';
import { MoralisNextAuthProvider } from '@moralisweb3/next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/helpers/prismadb';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [MoralisNextAuthProvider()],

  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      token.user = user;

      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
