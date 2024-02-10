import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import { DefaultSession } from "next-auth";
// to get secret: openssl rand -hex 32 in terminal


declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string
    } & DefaultSession["user"]
  }
}



export const { handlers:{GET,POST}, auth,signIn,signOut } = NextAuth({ 
  
     session:{
       strategy:'jwt'
     },
    pages:{
        signIn:'/',
        
    },
    secret:process.env.AUTH_SECRET,
    providers: [

credentials({
    async authorize(credentials) {
   
     
          const response = await fetch('https://coding.zippy.com.gh/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });

        if (!response.ok) {
          return null
        }
     
        const user = await response.json()
   
    

        return user
      },
})

],
callbacks:{
  async jwt ({token,user}){
   
    if(user && 'accessToken' in user){
      return {
        ...token,
        accessToken:user.accessToken
      }
    } 
  
   return token
  },
  async session({ session, token }) {
    if (token && 'accessToken' in token) {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken 
        }
      };
    }
    return session;
  }
}


})