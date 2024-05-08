import user from "@database/models/user";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);

const authenticate = async (credentials) => {
  const { email, password } = credentials;
  const User = await user()
    .where("email" == email)
    .where("password", decrypt(password))
    .first();
  return User;
};
