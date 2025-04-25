"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Chatbot from "@/components/Chatbot";
import AlertsPanel from "@/components/AlertsPanel";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [business, setBusiness] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        // Fetch business data
        const businessRes = await fetch("/api/business");
        if (businessRes.ok) {
          const businessData = await businessRes.json();
          setBusiness(businessData);
        }

        // Fetch ads data
        const adsRes = await fetch("/api/ads");
        if (adsRes.ok) {
          const adsData = await adsRes.json();
          setAds(adsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          No Business Profile Found
        </h2>
        <p className="text-gray-600 mb-6">
          Please create a business profile to get started.
        </p>
        <button
          onClick={() => router.push("/onboarding")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Business Profile
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Business Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Business Name</h3>
            <p className="text-lg">{business.name}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Industry</h3>
            <p className="text-lg">{business.industry}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-600">Location</h3>
            <p className="text-lg">{business.location}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Ad Analyses</h2>
        {ads.length === 0 ? (
          <p className="text-gray-600">
            No ad analyses yet. Start by analyzing your first ad!
          </p>
        ) : (
          <div className="space-y-4">
            {ads.map((ad) => (
              <div key={ad.id} className="border rounded-lg p-4">
                <h3 className="font-medium">{ad.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(ad.createdAt).toLocaleDateString()}
                </p>
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Score: {ad.score}/10
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
