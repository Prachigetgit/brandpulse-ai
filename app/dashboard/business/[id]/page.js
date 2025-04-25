"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function BusinessDetails() {
  const params = useParams();
  const [business, setBusiness] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await fetch(`/api/business/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch business details");
        }
        const data = await response.json();
        // Parse keywords from string to array if needed
        const businessData = {
          ...data,
          keywords:
            typeof data.keywords === "string"
              ? JSON.parse(data.keywords)
              : data.keywords || [],
        };
        setBusiness(businessData);
      } catch (error) {
        console.error("Error fetching business:", error);
        toast.error("Failed to load business details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusiness();
  }, [params.id]);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch(`/api/business/${params.id}/analyze`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to start analysis");
      }

      toast.success("Analysis started successfully!");
      // You can add a polling mechanism here to check analysis status
    } catch (error) {
      console.error("Error starting analysis:", error);
      toast.error("Failed to start analysis");
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <p>Loading business details...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <p>Business not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>{business.name}</CardTitle>
          <CardDescription>Business Details and Analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Industry</h3>
              <p>{business.industry}</p>
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>{business.location || "Not specified"}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Keywords</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {business.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Competitors</h3>
            <div className="mt-2 space-y-2">
              {business.competitors?.length > 0 ? (
                business.competitors.map((competitor) => (
                  <div
                    key={competitor.id}
                    className="bg-gray-50 p-3 rounded-lg"
                  >
                    <p className="font-medium">{competitor.name}</p>
                    <p className="text-sm text-gray-500">
                      Platform: {competitor.platform}
                    </p>
                  </div>
                ))
              ) : (
                <p>No competitors added yet</p>
              )}
            </div>
          </div>

          <Button
            onClick={startAnalysis}
            disabled={isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? "Starting Analysis..." : "Start Analysis"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
