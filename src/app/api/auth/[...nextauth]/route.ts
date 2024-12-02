import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  
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
    })
    ],

    pages: {
        signIn: "/login",
      },
    session: {
    strategy: "jwt",
    },

    
}

const handler = NextAuth(options)


export {handler as GET , handler as POST}
