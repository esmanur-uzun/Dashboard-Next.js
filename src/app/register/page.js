import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(); // Formun varsayılan davranışını engelle
    // Burada form verilerini kullanarak kayıt işlemi yapılabilir
    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4 text-center font-semibold">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <Input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
