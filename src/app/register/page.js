"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation"; 

const Register = () => {
  const router = useRouter()
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Hata durumu için bir state tanımlanır

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/posts", { fullname, email, password })
      .then((register_response) => {
        console.log(register_response);
        router.push("/login");
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {error && ( // Hata durumu varsa, alert bileşeni görüntülenir
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <h1 className="text-3xl mb-4 text-center font-semibold">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <Input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors duration-300"
            >
              Register
            </button>
          </div>
          <Link
            className="text-xs flex justify-center mt-4 underline text-cyan-700"
            href="/login"
          >
            Do you already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
