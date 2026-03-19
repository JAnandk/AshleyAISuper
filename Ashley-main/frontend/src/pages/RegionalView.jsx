import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { RegionalMap } from '../components/dashboard/RegionalMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { regionalPerformanceData } from '../data/mockData';

const regionalSignals = [
  { title: "CCTV Coverage", value: "88%", detail: "Zones with active camera feeds" },
  { title: "RFID Accuracy", value: "94.1%", detail: "Scan-to-system match rate" },
  { title: "Delivery Success", value: "89.6%", detail: "On-time delivery rate" },
  { title: "Service Recovery", value: "84.7%", detail: "Tickets resolved < 48 hrs" }
];

export default function RegionalView() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Regional View</h2>
        <p className="text-muted-foreground">
          Compare store performance with CCTV and RFID coverage indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {regionalSignals.map((signal) => (
          <Card key={signal.title} className="border-border/50">
            <CardHeader>
              <CardDescription>{signal.title}</CardDescription>
              <CardTitle className="text-2xl">{signal.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{signal.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <RegionalMap data={regionalPerformanceData} />
    </AppLayout>
  );
}
