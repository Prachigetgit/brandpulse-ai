"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter, useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";

export default function AdDetailsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const params = useParams();
  const [ad, setAd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (user && params.id) {
      fetchAdDetails();
    }
  }, [user, params.id]);

  const fetchAdDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/ads/${params.id}`);

      if (response.ok) {
        const data = await response.json();
        setAd(data);
      } else {
        toast.error("Failed to load ad details");
      }
    } catch (error) {
      console.error("Error fetching ad details:", error);
      toast.error("Failed to load ad details");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="py-10 text-center">
            <p>Loading ad details...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!ad) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="py-10 text-center">
            <p>Ad not found</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/ads")}
            >
              Back to Ads
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/ads")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Ads
          </Button>
          <h1 className="text-3xl font-bold">Ad Details</h1>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">
                    {ad.competitor.name}
                  </CardTitle>
                  <CardDescription>{ad.platform}</CardDescription>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    router.push(`/dashboard/competitor/${ad.competitorId}`)
                  }
                >
                  View Competitor
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Ad Type</h3>
                    <p className="text-gray-500">
                      {ad.adType || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">CTA</h3>
                    <p className="text-gray-500">{ad.cta || "Not specified"}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Target Demographic</h3>
                    <p className="text-gray-500">
                      {ad.targetDemographic || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Design Style</h3>
                    <p className="text-gray-500">
                      {ad.designStyle || "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Date Analyzed</h3>
                    <p className="text-gray-500">
                      {new Date(ad.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Emotions</h3>
                    <div className="flex flex-wrap gap-2">
                      {ad.emotions && ad.emotions.length > 0 ? (
                        ad.emotions.map((emotion, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                          >
                            {emotion}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">No emotions analyzed</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {ad.keywords && ad.keywords.length > 0 ? (
                        ad.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-2 py-1 rounded-full text-xs"
                          >
                            {keyword}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">No keywords extracted</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Analysis Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Ad Effectiveness</h3>
                  <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${ad.effectivenessScore || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {ad.effectivenessScore || 0}% effectiveness score
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Recommendations</h3>
                  {ad.recommendations && ad.recommendations.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      {ad.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-500">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 mt-2">
                      No recommendations available
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
