import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider  from "next-auth/providers/google";
import TwitterProvider from 'next-auth/providers/twitter'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    }, 

    async session({session, token}) {
      return {...session, ...token}
    }
  },

  providers: [
    
    CredentialsProvider({

      async authorize(credentials) {

        const fetchOptions = { 
          body: JSON.stringify({email: credentials?.email, password: credentials?.password}),
          headers: { "content-type": "application/json" },
          method: 'post',
        }

        const res = await fetch('https://exam.elevateegy.com/api/v1/auth/signin', fetchOptions);
            
        const user = await res.json();    
                                                                              
        if (user?.user?.email === credentials?.email) return user
            
        return null;

      },
      credentials: {
        email: { type: "email" }, 
        password: { type: "password"},
      }
    }), 

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
    }),
    

    FacebookProvider ({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLINT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    })

    ],

    

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/login",
      },

    session: {
      strategy: "jwt",
    },
}

const handler = NextAuth(authOptions)


export {handler as GET , handler as POST}
