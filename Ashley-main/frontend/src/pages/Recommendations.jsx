import React from 'react';
import { AppLayout } from '../components/dashboard/AppLayout';
import { RecommendationsPanel } from '../components/dashboard/RecommendationsPanel';
import { recommendationsData } from '../data/mockData';

export default function Recommendations() {
  return (
    <AppLayout>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Recommendations</h2>
        <p className="text-muted-foreground">
          Explainable actions with measurable impact.
        </p>
      </div>
      <RecommendationsPanel data={recommendationsData} />
    </AppLayout>
  );
}
