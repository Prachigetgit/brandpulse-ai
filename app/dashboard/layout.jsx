"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function Dashboard({ children }) {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">BrandPulse AI</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Welcome,</span>
                <span className="font-medium">
                  {user?.firstName || user?.username}
                </span>
              </div>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

export default Dashboard;
