import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { KPICard } from '../components/dashboard/KPICard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  manufacturingKpiData,
  manufacturingInsightsData,
  twinStatusData
} from '../data/mockData';

const machineSignals = [
  { label: "Vibration Alerts", value: "6", note: "CNC lines" },
  { label: "Vision Defects", value: "2.1%", note: "Finish inspection" },
  { label: "Energy per Unit", value: "5.2 kWh", note: "Rolling 7-day" },
  { label: "Safety Sensors", value: "Active", note: "E-stop coverage" },
];

export default function ManufacturingOps() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Manufacturing Operations</h2>
        <p className="text-muted-foreground">
          Sensor-driven insights from MES, vision systems, and machine telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {manufacturingKpiData.map((kpi) => (
          <KPICard key={kpi.id} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Line Telemetry</CardTitle>
            <CardDescription>SCADA/PLC + vision + energy signals</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {machineSignals.map((signal) => (
              <div key={signal.label} className="p-3 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">{signal.label}</p>
                <p className="text-lg font-semibold text-foreground">{signal.value}</p>
                <Badge variant="outline" className="mt-2">{signal.note}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Plant Command Center</CardTitle>
            <CardDescription>{twinStatusData[1].title} • Uptime {twinStatusData[1].uptime}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Zones</p>
              <p className="text-sm text-foreground">{twinStatusData[1].zones}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Live Signals</p>
              <p className="text-sm text-foreground">{twinStatusData[1].signals}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {manufacturingInsightsData.map((insight) => (
          <Card key={insight.id} className="border-border/50">
            <CardHeader>
              <Badge variant="outline">{insight.type}</Badge>
              <CardTitle className="text-base">{insight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{insight.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
