import { Account, Profile } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'google') {
        return (
          (profile as GoogleProfile).email_verified &&
          (profile as GoogleProfile).email.endsWith('@mwit.ac.th')
        )
      }
      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})
