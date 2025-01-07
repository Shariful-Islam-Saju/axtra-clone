'use client';
import { useRouter } from "next/navigation";
import React from "react";


const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-white text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-dark transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
