import React from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export const ActionableAlerts = ({ data }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5" />;
      case 'success':
        return <CheckCircle2 className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getVariant = (type) => {
    switch (type) {
      case 'critical':
        return 'destructive';
      case 'warning':
        return 'warning';
      case 'success':
        return 'success';
      default:
        return 'info';
    }
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Actionable Alerts</CardTitle>
        <CardDescription>Real-time store issues requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "flex items-start gap-4 p-4 rounded-lg border transition-smooth hover:shadow-md",
                alert.type === 'critical' && "bg-destructive/5 border-destructive/20",
                alert.type === 'warning' && "bg-warning/5 border-warning/20",
                alert.type === 'success' && "bg-success/5 border-success/20",
                alert.type === 'info' && "bg-info/5 border-info/20"
              )}
            >
              <div className={cn(
                "mt-0.5",
                alert.type === 'critical' && "text-destructive",
                alert.type === 'warning' && "text-warning",
                alert.type === 'success' && "text-success",
                alert.type === 'info' && "text-info"
              )}>
                {getIcon(alert.type)}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant={getVariant(alert.type)} className="mb-2">
                      {alert.category}
                    </Badge>
                    <h4 className="text-sm font-semibold text-foreground">{alert.title}</h4>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-muted-foreground">{alert.store}</span>
                  <Button size="sm" variant="ghost" className="h-8 gap-1">
                    {alert.action}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
