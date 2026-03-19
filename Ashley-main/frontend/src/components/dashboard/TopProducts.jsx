import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Package, Activity } from 'lucide-react';
import { formatCurrency, cn } from '../../lib/utils';

export const TopProducts = ({ data }) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Top Performing Items</CardTitle>
        <CardDescription>Best sellers by revenue and attachment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((product, index) => (
            <div
              key={product.sku}
              className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-muted/30 transition-smooth"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-foreground truncate">{product.name}</h4>
                  <Badge variant="outline" className="text-xs">{product.sku}</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{formatCurrency(product.sales)}</span>
                  <span className="flex items-center gap-1 text-success">
                    <TrendingUp className="h-3 w-3" />
                    {product.growth}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <div className="flex items-center gap-1 text-xs">
                  <Package className="h-3 w-3 text-muted-foreground" />
                  <span className={cn(
                    "font-medium",
                    product.stock > 70 ? "text-success" : product.stock > 50 ? "text-warning" : "text-destructive"
                  )}>
                    {product.stock}%
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Activity className="h-3 w-3 text-muted-foreground" />
                  <span className="font-medium text-primary">{product.engagement}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
