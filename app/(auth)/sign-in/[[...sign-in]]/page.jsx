"use client";
import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="BrandPulse AI Logo"
              width={60}
              height={60}
              className="h-16 w-auto"
            />
          </div>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            BrandPulse AI
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Competitive intelligence for your business
          </p>
        </div>

        <SignIn />
      </div>
    </div>
  );
}
