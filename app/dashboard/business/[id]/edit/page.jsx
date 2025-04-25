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
import { toast } from "sonner";

export default function EditBusiness({ params }) {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [business, setBusiness] = useState({
    name: "",
    industry: "",
    location: "",
    keywords: "",
    competitors: "",
  });

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await fetch(`/api/business/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch business");
        const data = await response.json();
        setBusiness({
          name: data.name,
          industry: data.industry,
          location: data.location || "",
          keywords: data.keywords.join(", "),
          competitors: data.competitors?.map((c) => c.name).join(", ") || "",
        });
      } catch (error) {
        console.error("Error fetching business:", error);
        toast.error("Failed to load business details");
      }
    };

    if (params.id) {
      fetchBusiness();
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
      // Process keywords into an array
      const keywordsArray = business.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      // Create a clean data object
      const formData = {
        name: business.name,
        industry: business.industry,
        location: business.location || null,
        keywords: keywordsArray,
        competitors: business.competitors || null,
      };

      const response = await fetch(`/api/business/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update business profile");
      }

      toast.success("Business profile updated successfully!");
      router.push(`/dashboard/business/${params.id}`);
    } catch (error) {
      console.error("Error updating business:", error);
      toast.error("Failed to update business profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Business Profile</CardTitle>
          <CardDescription>
            Update your business details to improve competitor analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Business Name</Label>
              <Input
                id="name"
                value={business.name}
                onChange={(e) =>
                  setBusiness({ ...business, name: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry/Niche</Label>
              <Input
                id="industry"
                value={business.industry}
                onChange={(e) =>
                  setBusiness({ ...business, industry: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (Optional)</Label>
              <Input
                id="location"
                value={business.location}
                onChange={(e) =>
                  setBusiness({ ...business, location: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords / Services / Products</Label>
              <Textarea
                id="keywords"
                value={business.keywords}
                onChange={(e) =>
                  setBusiness({ ...business, keywords: e.target.value })
                }
                placeholder="Enter keywords separated by commas"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Known Competitors (Optional)</Label>
              <Textarea
                id="competitors"
                value={business.competitors}
                onChange={(e) =>
                  setBusiness({ ...business, competitors: e.target.value })
                }
                placeholder="Enter competitor names separated by commas"
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
                {isLoading ? "Updating..." : "Update Profile"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
