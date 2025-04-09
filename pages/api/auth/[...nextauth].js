import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liI9lRdVTdZZvmFd',
      clientSecret: '718de922635a9e8d0111fc6a51e75851b795752a',
    }),
  ],
  secret : 'seonzone1234'
};
export default NextAuth(authOptions); 