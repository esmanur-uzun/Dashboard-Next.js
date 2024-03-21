"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // useRouter importu düzeltildi

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // Sayfayı yenilemeden işlem sonrası yönlendirme için
    });
    console.log(result)
    // if (result?.error) {
    //   // Giriş hatası varsa işleyin (örneğin, kullanıcıya bir hata mesajı gösterin)
    //   console.error('Giriş hatası:', result.error);
    // } else {
    //   // Başarılı giriş durumunda kullanıcıyı yönlendirin
    //   router.push('/');
    // }
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
