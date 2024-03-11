"use client"
import React from "react";
import { Input } from "@/components/ui/input";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Formun gönderim işlemleri buraya gelecek
    console.log("Form gönderildi!");
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
              
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors duration-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
