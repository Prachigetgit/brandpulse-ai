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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function EditAdAnalysis({ params }) {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [adAnalysis, setAdAnalysis] = useState({
    title: "",
    platform: "",
    adType: "",
    content: "",
    mediaUrl: "",
    landingPage: "",
    cta: "",
    emotions: "",
    targetDemographic: "",
    designStyle: "",
    score: 0,
  });

  useEffect(() => {
    const fetchAdAnalysis = async () => {
      try {
        const response = await fetch(`/api/ads/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch ad analysis");
        const data = await response.json();

        // Convert emotions array to comma-separated string
        const emotionsString = Array.isArray(data.emotions)
          ? data.emotions.join(", ")
          : data.emotions || "";

        setAdAnalysis({
          title: data.title || "",
          platform: data.platform || "",
          adType: data.adType || "",
          content: data.content || "",
          mediaUrl: data.mediaUrl || "",
          landingPage: data.landingPage || "",
          cta: data.cta || "",
          emotions: emotionsString,
          targetDemographic: data.targetDemographic || "",
          designStyle: data.designStyle || "",
          score: data.score || 0,
        });
      } catch (error) {
        console.error("Error fetching ad analysis:", error);
        toast.error("Failed to load ad analysis details");
      }
    };

    if (params.id) {
      fetchAdAnalysis();
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to continue");
      return;
    }

    setIsLoading(true);
    try {
      // Convert emotions string to array
      const emotionsArray = adAnalysis.emotions
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);

      const formData = {
        ...adAnalysis,
        emotions: emotionsArray,
      };

      const response = await fetch(`/api/ads/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update ad analysis");
      }

      toast.success("Ad analysis updated successfully!");
      router.push(`/dashboard/ads/${params.id}`);
    } catch (error) {
      console.error("Error updating ad analysis:", error);
      toast.error("Failed to update ad analysis. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Ad Analysis</CardTitle>
          <CardDescription>
            Update ad analysis details to improve your competitor insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Ad Title</Label>
              <Input
                id="title"
                value={adAnalysis.title}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, title: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select
                value={adAnalysis.platform}
                onValueChange={(value) =>
                  setAdAnalysis({ ...adAnalysis, platform: value })
                }
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="adType">Ad Type</Label>
              <Select
                value={adAnalysis.adType}
                onValueChange={(value) =>
                  setAdAnalysis({ ...adAnalysis, adType: value })
                }
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select ad type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="carousel">Carousel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Ad Content</Label>
              <Textarea
                id="content"
                value={adAnalysis.content}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, content: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mediaUrl">Media URL</Label>
              <Input
                id="mediaUrl"
                type="url"
                value={adAnalysis.mediaUrl}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, mediaUrl: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="landingPage">Landing Page URL</Label>
              <Input
                id="landingPage"
                type="url"
                value={adAnalysis.landingPage}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, landingPage: e.target.value })
                }
                placeholder="https://example.com"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta">Call to Action</Label>
              <Input
                id="cta"
                value={adAnalysis.cta}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, cta: e.target.value })
                }
                placeholder="Shop Now, Learn More, etc."
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emotions">Emotions (comma-separated)</Label>
              <Input
                id="emotions"
                value={adAnalysis.emotions}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, emotions: e.target.value })
                }
                placeholder="excited, curious, happy"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetDemographic">Target Demographic</Label>
              <Input
                id="targetDemographic"
                value={adAnalysis.targetDemographic}
                onChange={(e) =>
                  setAdAnalysis({
                    ...adAnalysis,
                    targetDemographic: e.target.value,
                  })
                }
                placeholder="18-34 year olds, parents, etc."
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="designStyle">Design Style</Label>
              <Input
                id="designStyle"
                value={adAnalysis.designStyle}
                onChange={(e) =>
                  setAdAnalysis({ ...adAnalysis, designStyle: e.target.value })
                }
                placeholder="minimalist, vibrant, premium"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="score">Score (0-10)</Label>
              <Input
                id="score"
                type="number"
                min="0"
                max="10"
                value={adAnalysis.score}
                onChange={(e) =>
                  setAdAnalysis({
                    ...adAnalysis,
                    score: parseInt(e.target.value) || 0,
                  })
                }
                disabled={isLoading}
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Ad Analysis"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
