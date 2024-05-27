"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setCookie } from "cookies-next";
import { ToastAction } from "@/components/ui/toast"
import { toast, useToast } from "@/components/ui/use-toast"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/api/login",{email,password})
      if(result){
        setCookie('accessToken',result.data.token)
        router.push("/")
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: {error},
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4 text-center font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors duration-300">
              Login
            </button>
          </div>
          <Link
            className="text-xs flex justify-center mt-4 underline text-cyan-700"
            href="/register"
          >
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
