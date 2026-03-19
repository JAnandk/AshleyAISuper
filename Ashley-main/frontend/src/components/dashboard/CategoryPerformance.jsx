import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { formatCurrency } from '../../lib/utils';

export const CategoryPerformance = ({ data }) => {
  const COLORS = ['hsl(215, 75%, 48%)', 'hsl(185, 65%, 50%)', 'hsl(145, 60%, 45%)', 'hsl(35, 92%, 55%)', 'hsl(0, 72%, 51%)'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold text-foreground mb-2">{data.category}</p>
          <p className="text-xs text-muted-foreground">Sales: {formatCurrency(data.sales)}</p>
          <p className="text-xs text-muted-foreground">Growth: {data.growth}%</p>
          <p className="text-xs text-muted-foreground">Margin: {data.margin}%</p>
          <p className="text-xs text-muted-foreground">Volume: {data.volume} units</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Category Performance</CardTitle>
        <CardDescription>Sales and growth by furniture category</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
