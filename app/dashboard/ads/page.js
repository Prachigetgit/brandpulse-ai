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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft, Search, Edit, Eye } from "lucide-react";

export default function AdsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [ads, setAds] = useState([]);
  const [competitors, setCompetitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompetitor, setSelectedCompetitor] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (user) {
      fetchAds();
      fetchCompetitors();
    }
  }, [user, page, selectedCompetitor, selectedPlatform]);

  const fetchCompetitors = async () => {
    try {
      const response = await fetch("/api/business");
      if (response.ok) {
        const data = await response.json();
        setCompetitors(data.competitors || []);

        // Extract unique platforms
        const uniquePlatforms = [
          ...new Set(data.competitors.map((c) => c.platform)),
        ];
        setPlatforms(uniquePlatforms);
      }
    } catch (error) {
      console.error("Error fetching competitors:", error);
    }
  };

  const fetchAds = async () => {
    try {
      setIsLoading(true);
      let url = `/api/ads?page=${page}`;

      if (selectedCompetitor) {
        url += `&competitorId=${selectedCompetitor}`;
      }

      if (selectedPlatform) {
        url += `&platform=${selectedPlatform}`;
      }

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setAds(data.adAnalyses || []);
        setTotalPages(data.pagination?.pages || 1);
      }
    } catch (error) {
      console.error("Error fetching ads:", error);
      toast.error("Failed to load ads");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredAds = ads.filter((ad) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      ad.competitor.name.toLowerCase().includes(searchLower) ||
      ad.platform.toLowerCase().includes(searchLower) ||
      (ad.adType && ad.adType.toLowerCase().includes(searchLower)) ||
      (ad.cta && ad.cta.toLowerCase().includes(searchLower))
    );
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleEditAd = (adId) => {
    router.push(`/dashboard/ads/${adId}/edit`);
  };

  if (isLoading && ads.length === 0) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="py-10 text-center">
            <p>Loading ads...</p>
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
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Ads Analysis</h1>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search ads..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="competitor">Competitor</Label>
          <Select
            value={selectedCompetitor}
            onValueChange={setSelectedCompetitor}
          >
            <SelectTrigger id="competitor">
              <SelectValue placeholder="All competitors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All competitors</SelectItem>
              {competitors.map((competitor) => (
                <SelectItem key={competitor.id} value={competitor.id}>
                  {competitor.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger id="platform">
              <SelectValue placeholder="All platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All platforms</SelectItem>
              {platforms.map((platform) => (
                <SelectItem key={platform} value={platform}>
                  {platform}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredAds.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAds.map((ad) => (
                <Card key={ad.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {ad.competitor.name}
                        </CardTitle>
                        <CardDescription>{ad.platform}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => router.push(`/dashboard/ads/${ad.id}`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditAd(ad.id)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {ad.adType && (
                        <div>
                          <p className="text-sm font-medium">Ad Type</p>
                          <p className="text-sm text-gray-500">{ad.adType}</p>
                        </div>
                      )}

                      {ad.cta && (
                        <div>
                          <p className="text-sm font-medium">CTA</p>
                          <p className="text-sm text-gray-500">{ad.cta}</p>
                        </div>
                      )}

                      {ad.targetDemographic && (
                        <div>
                          <p className="text-sm font-medium">
                            Target Demographic
                          </p>
                          <p className="text-sm text-gray-500">
                            {ad.targetDemographic}
                          </p>
                        </div>
                      )}

                      {ad.designStyle && (
                        <div>
                          <p className="text-sm font-medium">Design Style</p>
                          <p className="text-sm text-gray-500">
                            {ad.designStyle}
                          </p>
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium">Date</p>
                        <p className="text-sm text-gray-500">
                          {new Date(ad.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="px-4 py-2">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-gray-500">
                No ads found. Try adjusting your filters or start an analysis to
                discover competitor ads.
              </p>
              <Button
                className="mt-4"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
