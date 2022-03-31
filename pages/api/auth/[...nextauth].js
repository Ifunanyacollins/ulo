import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const user = credentials.user;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return JSON.parse(user);
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return Promise.reject(new Error(user.message));

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    signingKey: process.env.NEXTAUTH_SECRET,
  },

  callbacks: {
    async session({ session, user, token }) {
      return (session.user = token.user);
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = {
          token: user.token,
          profile: { ...user.user, ...user.profile },
        };
      }
      return token;
    },
  },
});
