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
          // Sahte API'den gelen kullanıcı bilgileri
          const response = await axios.post("http://localhost:3001/posts", {
            email: credentials.email,
            password: credentials.password,
          });

          const user = response.data.user;
          if (user) {
            // Kullanıcı doğrulandıysa, kullanıcı bilgilerini döndür
            
            return user;
          } else {
            // Kullanıcı doğrulanamazsa null veya false döndür
            return null;
          }
        } catch (error) {
          console.error("Kimlik doğrulama hatası:", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
