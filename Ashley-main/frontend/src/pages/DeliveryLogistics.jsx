import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const deliveryQueue = [
  { id: 1, order: "SO-18492", eta: "Today 4:30 PM", risk: "High", note: "Route congestion" },
  { id: 2, order: "SO-18476", eta: "Tomorrow 9:00 AM", risk: "Medium", note: "Warehouse staging delay" },
  { id: 3, order: "SO-18435", eta: "Tomorrow 1:15 PM", risk: "Low", note: "On schedule" },
];

const logisticsSignals = [
  { label: "On-Time Delivery", value: "89.6%" },
  { label: "Damage Risk Score", value: "2.3/5" },
  { label: "Active Exceptions", value: "14" },
  { label: "Average Delivery Lead", value: "3.6 days" },
];

export default function DeliveryLogistics() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Delivery & Logistics</h2>
        <p className="text-muted-foreground">
          Orchestrate order promises, exception handling, and delivery performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {logisticsSignals.map((signal) => (
          <Card key={signal.label} className="border-border/50">
            <CardHeader>
              <CardDescription>{signal.label}</CardDescription>
              <CardTitle className="text-2xl">{signal.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Exception Queue</CardTitle>
          <CardDescription>Orders needing intervention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {deliveryQueue.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border">
              <div>
                <p className="text-sm font-semibold text-foreground">{item.order}</p>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{item.eta}</p>
                <Badge variant={item.risk === "High" ? "destructive" : item.risk === "Medium" ? "warning" : "success"}>
                  {item.risk} Risk
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppLayout>
  );
}
