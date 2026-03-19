import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { CategoryPerformance } from '../components/dashboard/CategoryPerformance';
import { TopProducts } from '../components/dashboard/TopProducts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  categoryPerformanceData,
  topProductsData
} from '../data/mockData';

const rfidSignals = [
  { label: "RFID Coverage", value: "76%", note: "Tagged floor items" },
  { label: "Phantom Inventory", value: "3.2%", note: "Detected mismatches" },
  { label: "Cycle Count Missions", value: "18", note: "Active today" },
  { label: "Stockout Risk", value: "12", note: "Items at risk" }
];

export default function InventoryAssortment() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Inventory & Assortment</h2>
        <p className="text-muted-foreground">
          RFID scans and floor audits keep inventory accuracy and assortment depth on track.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {rfidSignals.map((signal) => (
          <Card key={signal.label} className="border-border/50">
            <CardHeader>
              <CardDescription>{signal.label}</CardDescription>
              <CardTitle className="text-2xl">{signal.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">{signal.note}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryPerformance data={categoryPerformanceData} />
        <TopProducts data={topProductsData.slice(0, 6)} />
      </div>
    </AppLayout>
  );
}
