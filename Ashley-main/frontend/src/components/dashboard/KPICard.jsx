import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { formatCurrency, formatNumber, cn } from '../../lib/utils';

export const KPICard = ({ title, value, change, trend, format, description }) => {
  const formatValue = (val) => {
    if (format === 'currency') return formatCurrency(val);
    if (format === 'percent') return `${val}%`;
    return formatNumber(val);
  };

  const isPositive = trend === 'up';

  return (
    <Card className="hover-lift border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">
          {formatValue(value)}
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
          <div
            className={cn(
              'flex items-center gap-1 text-xs font-semibold',
              isPositive ? 'text-success' : 'text-destructive'
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {Math.abs(change)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
