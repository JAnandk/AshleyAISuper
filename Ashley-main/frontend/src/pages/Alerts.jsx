import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { ActionableAlerts } from '../components/dashboard/ActionableAlerts';
import { actionableAlertsData } from '../data/mockData';

export default function Alerts() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Alerts</h2>
        <p className="text-muted-foreground">
          Operational alerts across retail and manufacturing.
        </p>
      </div>
      <ActionableAlerts data={actionableAlertsData} />
    </AppLayout>
  );
}
