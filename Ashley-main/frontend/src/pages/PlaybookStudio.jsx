import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { playbookLibraryData, sensitivitySettingsData } from '../data/mockData';

const builderSteps = [
  "Define trigger signals (CCTV, RFID, POS, MES)",
  "Attach evidence and causal hypotheses",
  "Set role-based actions and approvals",
  "Choose sensitivity and audit requirements",
];

export default function PlaybookStudio() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Playbook Studio</h2>
        <p className="text-muted-foreground">
          Prompt-to-playbook builder with explainable, auditable operational actions.
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Build Flow</CardTitle>
          <CardDescription>From prompt to governed micro-app in minutes</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {builderSteps.map((step) => (
            <div key={step} className="p-3 rounded-lg border border-border bg-muted/20">
              <p className="text-sm text-foreground">{step}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Active Playbooks</CardTitle>
            <CardDescription>Retail and manufacturing playbooks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {playbookLibraryData.map((playbook) => (
              <div key={playbook.id} className="p-3 rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">{playbook.title}</p>
                  <Badge variant={playbook.status === "Active" ? "success" : "warning"}>
                    {playbook.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{playbook.trigger}</p>
                <div className="flex items-center justify-between mt-3">
                  <Badge variant="outline">{playbook.domain}</Badge>
                  <Button size="sm" variant="ghost" className="h-8">Open</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Sensitivity Settings</CardTitle>
            <CardDescription>False positive vs false negative tuning</CardDescription>
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
      </div>
    </AppLayout>
  );
}
