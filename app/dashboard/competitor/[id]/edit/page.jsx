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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function EditCompetitor({ params }) {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [competitor, setCompetitor] = useState({
    name: "",
    platform: "",
    url: "",
  });

  useEffect(() => {
    const fetchCompetitor = async () => {
      try {
        const response = await fetch(`/api/competitors/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch competitor");
        const data = await response.json();
        setCompetitor({
          name: data.name,
          platform: data.platform,
          url: data.url || "",
        });
      } catch (error) {
        console.error("Error fetching competitor:", error);
        toast.error("Failed to load competitor details");
      }
    };

    if (params.id) {
      fetchCompetitor();
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
      const response = await fetch(`/api/competitors/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(competitor),
      });

      if (!response.ok) {
        throw new Error("Failed to update competitor");
      }

      toast.success("Competitor updated successfully!");
      router.push(`/dashboard/competitor/${params.id}`);
    } catch (error) {
      console.error("Error updating competitor:", error);
      toast.error("Failed to update competitor. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Competitor</CardTitle>
          <CardDescription>
            Update competitor details to improve ad analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Competitor Name</Label>
              <Input
                id="name"
                value={competitor.name}
                onChange={(e) =>
                  setCompetitor({ ...competitor, name: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select
                value={competitor.platform}
                onValueChange={(value) =>
                  setCompetitor({ ...competitor, platform: value })
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
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                type="url"
                value={competitor.url}
                onChange={(e) =>
                  setCompetitor({ ...competitor, url: e.target.value })
                }
                placeholder="https://example.com"
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
                {isLoading ? "Updating..." : "Update Competitor"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
