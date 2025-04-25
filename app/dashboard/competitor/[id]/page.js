"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

export default function CompetitorDetails() {
  const params = useParams();
  const router = useRouter();
  const [competitor, setCompetitor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompetitor = async () => {
      try {
        const response = await fetch(`/api/competitors/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch competitor details");
        }
        const data = await response.json();
        setCompetitor(data);
      } catch (error) {
        console.error("Error fetching competitor:", error);
        toast.error("Failed to load competitor details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompetitor();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <p>Loading competitor details...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!competitor) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <p>Competitor not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>{competitor.name}</CardTitle>
          <CardDescription>Competitor Details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Platform</h3>
              <p>{competitor.platform}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{competitor.status || "Active"}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Ad Analysis</h3>
            {competitor.adAnalyses && competitor.adAnalyses.length > 0 ? (
              <div className="space-y-4">
                {competitor.adAnalyses.map((ad) => (
                  <Card key={ad.id}>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium">Ad Type</h4>
                          <p className="text-sm text-gray-500">{ad.adType}</p>
                          <h4 className="font-medium mt-2">CTA</h4>
                          <p className="text-sm text-gray-500">
                            {ad.cta || "N/A"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Target Demographic</h4>
                          <p className="text-sm text-gray-500">
                            {ad.targetDemographic || "N/A"}
                          </p>
                          <h4 className="font-medium mt-2">Design Style</h4>
                          <p className="text-sm text-gray-500">
                            {ad.designStyle || "N/A"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">
                No ad analysis available yet. Start an analysis to see
                competitor ads.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
