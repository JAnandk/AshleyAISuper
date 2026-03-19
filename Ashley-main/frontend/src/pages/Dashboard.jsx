import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { SalesTrendChart } from '../components/dashboard/SalesTrendChart';
import { CategoryPerformance } from '../components/dashboard/CategoryPerformance';
import { ActionableAlerts } from '../components/dashboard/ActionableAlerts';
import { RecommendationsPanel } from '../components/dashboard/RecommendationsPanel';
import { TopProducts } from '../components/dashboard/TopProducts';
import { RegionalMap } from '../components/dashboard/RegionalMap';
import { EngagementChart } from '../components/dashboard/EngagementChart';
import { DigitalTwin3D } from '../components/dashboard/DigitalTwin3D';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  kpiData,
  salesTrendData,
  categoryPerformanceData,
  actionableAlertsData,
  recommendationsData,
  topProductsData,
  regionalPerformanceData,
  engagementMetricsData,
  playbookLibraryData,
  twinStatusData,
  observabilityMetricsData,
  sensitivitySettingsData,
  manufacturingKpiData,
  manufacturingInsightsData,
  retailTwinLayout,
  manufacturingTwinLayout
} from '../data/mockData';

export default function Dashboard() {
  return (
    <AppLayout>
      {/* Page Header */}
      <section id="overview" className="space-y-2 scroll-mt-24">
        <h2 className="text-3xl font-bold text-foreground">Executive Dashboard</h2>
        <p className="text-muted-foreground">
          Observe → explain → recommend → act for retail and manufacturing operations
        </p>
      </section>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.id} {...kpi} />
        ))}
      </section>

      {/* Main Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={salesTrendData} />
        <CategoryPerformance data={categoryPerformanceData} />
      </section>

      {/* Engagement and Regional */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EngagementChart data={engagementMetricsData} />
        </div>
        <TopProducts data={topProductsData.slice(0, 5)} />
      </section>

      {/* Regional Performance */}
      <section>
        <RegionalMap data={regionalPerformanceData} />
      </section>

      {/* Alerts and Recommendations */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionableAlerts data={actionableAlertsData} />
        <RecommendationsPanel data={recommendationsData} />
      </section>

      {/* AI Supervisor Builder */}
      <section className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">AI Supervisor Builder</h3>
          <p className="text-sm text-muted-foreground">
            Prompt-to-playbook workflows with explainable, role-aware actions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {playbookLibraryData.map((playbook) => (
            <Card key={playbook.id} className="border-border/50 bg-gradient-card">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="uppercase">{playbook.domain}</Badge>
                  <Badge variant={playbook.status === "Active" ? "success" : "warning"}>
                    {playbook.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{playbook.title}</CardTitle>
                <CardDescription>Sensitivity: {playbook.sensitivity}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Trigger</p>
                  <p className="text-sm text-foreground">{playbook.trigger}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Explain</p>
                  <p className="text-sm text-foreground">{playbook.explain}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Recommend</p>
                  <p className="text-sm text-foreground">{playbook.recommend}</p>
                </div>
                <Button size="sm" variant="ghost" className="h-8">Open Playbook</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Digital Twin Command Centers */}
      <section className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Digital Twin Command Centers</h3>
          <p className="text-sm text-muted-foreground">
            Spatial awareness for store and plant operations
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <DigitalTwin3D
            title={twinStatusData[0].title}
            subtitle={`${twinStatusData[0].signals} • Uptime ${twinStatusData[0].uptime}`}
            layout={retailTwinLayout}
          />
          <DigitalTwin3D
            title={twinStatusData[1].title}
            subtitle={`${twinStatusData[1].signals} • Uptime ${twinStatusData[1].uptime}`}
            layout={manufacturingTwinLayout}
          />
        </div>
      </section>

      {/* Manufacturing Operations */}
      <section className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Manufacturing Operations</h3>
          <p className="text-sm text-muted-foreground">
            OEE, quality, and maintenance intelligence for plant teams
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {manufacturingKpiData.map((kpi) => (
            <KPICard key={kpi.id} {...kpi} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {manufacturingInsightsData.map((insight) => (
            <Card key={insight.id} className="border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{insight.type}</Badge>
                </div>
                <CardTitle className="text-base">{insight.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{insight.message}</p>
                <Button size="sm" variant="ghost" className="h-8">{insight.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Observability and Sensitivity */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Observability</CardTitle>
            <CardDescription>Telemetry, drift, and latency tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {observabilityMetricsData.map((metric) => (
                <div key={metric.metric} className="p-3 rounded-lg border border-border bg-muted/20">
                  <p className="text-xs text-muted-foreground">{metric.detail}</p>
                  <p className="text-lg font-semibold text-foreground">{metric.metric}: {metric.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Sensitivity Controls</CardTitle>
            <CardDescription>Per-playbook tuning for alert behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {sensitivitySettingsData.map((setting) => (
              <div key={setting.playbook} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{setting.playbook}</p>
                  <p className="text-xs text-muted-foreground">{setting.note}</p>
                </div>
                <Badge variant={setting.setting === "Aggressive" ? "destructive" : "warning"}>
                  {setting.setting}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 Ashley AI Supervisor. Operations intelligence and automation.
          </p>
          <p className="flex items-center gap-2">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
