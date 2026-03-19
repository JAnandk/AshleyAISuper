import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, TrendingUp, Store, CheckCircle } from 'lucide-react';
import { formatCurrency, cn } from '../../lib/utils';

export const RegionalMap = ({ data }) => {
  const getPerformanceColor = (growth) => {
    if (growth >= 15) return 'text-success';
    if (growth >= 10) return 'text-info';
    return 'text-warning';
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Regional Performance</CardTitle>
        <CardDescription>Sales and store operations by region</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((region) => (
            <div
              key={region.region}
              className="p-4 rounded-lg border border-border bg-gradient-card hover:shadow-md transition-smooth"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="text-base font-semibold text-foreground">{region.region}</h4>
                </div>
                <Badge variant="success" className="text-xs">
                  Active
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="text-sm font-semibold text-foreground">{formatCurrency(region.revenue)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Store className="h-3 w-3" />
                    Stores
                  </span>
                  <span className="text-sm font-semibold text-foreground">{region.stores}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Store Readiness
                  </span>
                  <span className={cn(
                    "text-sm font-semibold",
                    region.compliance >= 90 ? "text-success" : "text-warning"
                  )}>
                    {region.compliance}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Growth
                  </span>
                  <span className={cn("text-sm font-semibold", getPerformanceColor(region.growth))}>
                    +{region.growth}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
