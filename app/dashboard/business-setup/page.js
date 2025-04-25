"use client";

import { useState } from "react";
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
import { toast } from "sonner";

export default function BusinessSetup() {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [keywords, setKeywords] = useState("");
  const [competitors, setCompetitors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to continue");
      return;
    }

    if (!businessName || !industry) {
      toast.error("Business name and industry are required");
      return;
    }

    setIsLoading(true);
    try {
      // Process keywords into an array
      const keywordsArray = keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      // Create a clean data object without circular references
      const formData = {
        businessName,
        industry,
        location: location || null,
        keywords: keywordsArray,
        competitors: competitors || null,
      };

      const response = await fetch("/api/business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to create business profile"
        );
      }

      const data = await response.json();
      toast.success("Business profile created successfully!");
      router.push(`/dashboard/business/${data.id}`);
    } catch (error) {
      console.error("Error creating business:", error);
      toast.error(
        error.message || "Failed to create business profile. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Business Setup</CardTitle>
          <CardDescription>
            Enter your business details to help BrandPulse AI analyze your
            competitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                name="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry/Niche</Label>
              <Input
                id="industry"
                name="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (Optional)</Label>
              <Input
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords / Services / Products</Label>
              <Textarea
                id="keywords"
                name="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Enter keywords separated by commas"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Known Competitors (Optional)</Label>
              <Textarea
                id="competitors"
                name="competitors"
                value={competitors}
                onChange={(e) => setCompetitors(e.target.value)}
                placeholder="Enter competitor names separated by commas"
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Profile..." : "Start Analysis"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
