"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, Edit, ExternalLink } from "lucide-react";

export default function AdAnalysisPage({ params }) {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [adAnalysis, setAdAnalysis] = useState(null);

  useEffect(() => {
    const fetchAdAnalysis = async () => {
      try {
        const response = await fetch(`/api/ads/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch ad analysis");
        const data = await response.json();
        setAdAnalysis(data);
      } catch (error) {
        console.error("Error fetching ad analysis:", error);
        toast.error("Failed to load ad analysis details");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchAdAnalysis();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!adAnalysis) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="py-10 text-center">
            <p>Ad analysis not found</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/ads")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Ads
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button variant="outline" onClick={() => router.push("/dashboard/ads")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Ads
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{adAnalysis.title || "Ad Analysis"}</CardTitle>
                  <CardDescription>
                    From {adAnalysis.competitor?.name} on {adAnalysis.platform}
                  </CardDescription>
                </div>
                <Button
                  onClick={() =>
                    router.push(`/dashboard/ads/${params.id}/edit`)
                  }
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ad Content</h3>
                  <p className="whitespace-pre-wrap">{adAnalysis.content}</p>
                </div>

                {adAnalysis.mediaUrl && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Media</h3>
                    <div className="relative aspect-video rounded-md overflow-hidden">
                      {adAnalysis.adType === "video" ? (
                        <video
                          src={adAnalysis.mediaUrl}
                          controls
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={adAnalysis.mediaUrl}
                          alt="Ad media"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                )}

                {adAnalysis.landingPage && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Landing Page</h3>
                    <a
                      href={adAnalysis.landingPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      {adAnalysis.landingPage}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                )}

                {adAnalysis.cta && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Call to Action</h3>
                    <p>{adAnalysis.cta}</p>
                  </div>
                )}

                {adAnalysis.emotions && adAnalysis.emotions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Emotions</h3>
                    <div className="flex flex-wrap gap-2">
                      {adAnalysis.emotions.map((emotion, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {emotion}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {adAnalysis.targetDemographic && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Target Demographic
                    </h3>
                    <p>{adAnalysis.targetDemographic}</p>
                  </div>
                )}

                {adAnalysis.designStyle && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Design Style</h3>
                    <p>{adAnalysis.designStyle}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Analysis Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Platform
                  </h3>
                  <p>{adAnalysis.platform}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Ad Type</h3>
                  <p>{adAnalysis.adType}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Score</h3>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{
                          width: `${(adAnalysis.score / 10) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="ml-2">{adAnalysis.score}/10</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Created At
                  </h3>
                  <p>
                    {new Date(adAnalysis.createdAt).toLocaleDateString()}{" "}
                    {new Date(adAnalysis.createdAt).toLocaleTimeString()}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Last Updated
                  </h3>
                  <p>
                    {new Date(adAnalysis.updatedAt).toLocaleDateString()}{" "}
                    {new Date(adAnalysis.updatedAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
