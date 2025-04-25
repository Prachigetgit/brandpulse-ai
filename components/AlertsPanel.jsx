"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, AlertTriangle, Info, CheckCircle } from "lucide-react";

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch alerts from an API
    // For now, we'll simulate some alerts
    const fetchAlerts = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock alerts data
        const mockAlerts = [
          {
            id: "1",
            type: "new_campaign",
            title: "New Instagram Campaign",
            message:
              'Competitor "Tech Solutions Inc" launched a new Instagram campaign focusing on product demonstrations.',
            timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
            read: false,
          },
          {
            id: "2",
            type: "creative_shift",
            title: "Creative Style Change",
            message:
              'Competitor "Digital Dynamics" has shifted their visual style from minimalist to vibrant in recent ads.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
            read: false,
          },
          {
            id: "3",
            type: "platform_change",
            title: "New Advertising Platform",
            message:
              'Competitor "Innovate Labs" has started advertising on LinkedIn for the first time.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
            read: true,
          },
          {
            id: "4",
            type: "discount",
            title: "New Discount Offer",
            message:
              'Competitor "Future Tech" is offering a 20% discount on their premium products.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
            read: true,
          },
        ];

        setAlerts(mockAlerts);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlerts();

    // In a real implementation, this would set up a WebSocket connection
    // to receive real-time alerts
    const interval = setInterval(() => {
      // Simulate new alerts coming in
      if (Math.random() > 0.7) {
        // 30% chance of new alert
        const newAlert = {
          id: Date.now().toString(),
          type: [
            "new_campaign",
            "creative_shift",
            "platform_change",
            "discount",
          ][Math.floor(Math.random() * 4)],
          title: "New Activity Detected",
          message:
            "A competitor has made changes to their advertising strategy.",
          timestamp: new Date().toISOString(),
          read: false,
        };

        setAlerts((prev) => [newAlert, ...prev]);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const markAsRead = (alertId) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, read: true } : alert
      )
    );
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "new_campaign":
        return <Bell className="h-5 w-5 text-blue-500" />;
      case "creative_shift":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "platform_change":
        return <Info className="h-5 w-5 text-purple-500" />;
      case "discount":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Live Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="py-4 text-center">Loading alerts...</div>
        ) : alerts.length === 0 ? (
          <div className="py-4 text-center text-gray-500">
            No alerts at the moment
          </div>
        ) : (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${
                    alert.read ? "bg-background" : "bg-muted/50"
                  }`}
                  onClick={() => markAsRead(alert.id)}
                >
                  <div className="flex items-start gap-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{alert.title}</h3>
                        <span className="text-xs text-gray-500">
                          {formatTimestamp(alert.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {alert.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
