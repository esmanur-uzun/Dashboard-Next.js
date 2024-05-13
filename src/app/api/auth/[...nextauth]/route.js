import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  pages: {
    login: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          let user = null
          await axios.post("http://localhost:5000/api/login", {
            email,
            password
          }).then((data_res)=>{
           user = data_res
          })
          if(user){
            return user
          }
          
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
