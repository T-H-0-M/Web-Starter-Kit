import React from "react";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";

export const HomePage: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white">
      <header className="w-full p-4 bg-blue-800 shadow-md">
        <h1 className="text-center text-3xl font-bold">
          Welcome to the Home Page
        </h1>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Hello, User!</h2>
        <p className="text-lg text-center mb-8">
          This is your homepage. Feel free to explore and enjoy the application.
        </p>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </main>
      <footer className="w-full p-4 mt-auto bg-blue-800 shadow-md text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your App Name. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
