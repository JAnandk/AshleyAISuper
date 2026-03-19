import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const staffingCoverage = [
  { zone: "Living Room", coverage: "92%", status: "On Track" },
  { zone: "Bedroom", coverage: "88%", status: "Watch" },
  { zone: "Mattress", coverage: "95%", status: "On Track" },
  { zone: "Checkout", coverage: "81%", status: "At Risk" },
];

const coachingPrompts = [
  { id: 1, associate: "J. Reed", focus: "Financing options recap", status: "Open" },
  { id: 2, associate: "M. Lopez", focus: "Mattress bundle attach rate", status: "In Progress" },
  { id: 3, associate: "S. Patel", focus: "Traffic-to-close follow-up", status: "Open" },
];

export default function StoreTeams() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Store Teams</h2>
        <p className="text-muted-foreground">
          Staffing coverage, coaching prompts, and floor readiness for retail teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Coverage by Zone</CardTitle>
            <CardDescription>Live associate presence across zones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {staffingCoverage.map((zone) => (
              <div key={zone.zone} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{zone.zone}</p>
                  <p className="text-xs text-muted-foreground">Coverage</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{zone.coverage}</p>
                  <Badge variant={zone.status === "On Track" ? "success" : zone.status === "Watch" ? "warning" : "destructive"}>
                    {zone.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Coaching Prompts</CardTitle>
            <CardDescription>Associate guidance triggered by AI Supervisor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {coachingPrompts.map((prompt) => (
              <div key={prompt.id} className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{prompt.associate}</p>
                  <p className="text-xs text-muted-foreground">{prompt.focus}</p>
                </div>
                <Badge variant={prompt.status === "In Progress" ? "info" : "warning"}>
                  {prompt.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
