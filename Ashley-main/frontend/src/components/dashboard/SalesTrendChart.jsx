import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SalesTrendChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold text-foreground mb-2">{payload[0].payload.month}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: ${(entry.value / 1000000).toFixed(2)}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle>Sales Performance Trend</CardTitle>
        <CardDescription>Monthly store revenue vs target</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(215, 75%, 48%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(215, 75%, 48%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(185, 65%, 50%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(185, 65%, 50%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(215, 75%, 48%)" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" strokeWidth={2} />
            <Area type="monotone" dataKey="target" stroke="hsl(185, 65%, 50%)" fillOpacity={1} fill="url(#colorTarget)" name="Target" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="lastYear" stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} strokeDasharray="3 3" name="Last Year" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
