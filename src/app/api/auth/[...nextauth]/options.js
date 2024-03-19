import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options = {
    providers:[
        CredentialsProvider({})
    ]
}