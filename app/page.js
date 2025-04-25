import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to BrandPulse AI
        </h1>
        <p className="text-xl mb-8 text-center">
          Your competitor analysis and insights platform
        </p>
        <div className="flex justify-center">
          <a
            href="/sign-in"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  );
}
