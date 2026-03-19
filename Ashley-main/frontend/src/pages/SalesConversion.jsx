import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { SalesTrendChart } from '../components/dashboard/SalesTrendChart';
import { EngagementChart } from '../components/dashboard/EngagementChart';
import { TopProducts } from '../components/dashboard/TopProducts';
import {
  kpiData,
  salesTrendData,
  engagementMetricsData,
  topProductsData
} from '../data/mockData';

export default function SalesConversion() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Sales & Conversion</h2>
        <p className="text-muted-foreground">
          CCTV footfall and associate engagement signals tied to close rate and ticket size.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.id} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={salesTrendData} />
        <EngagementChart data={engagementMetricsData} />
      </div>

      <TopProducts data={topProductsData.slice(0, 8)} />
    </AppLayout>
  );
}
