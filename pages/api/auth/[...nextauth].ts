import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account.provider === 'google') {
  //       return profile.email_verified && profile.email.endsWith('@example.com')
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   },
  // },
})
