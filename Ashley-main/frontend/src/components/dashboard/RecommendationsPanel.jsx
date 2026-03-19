import React from 'react';
import { Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export const RecommendationsPanel = ({ data }) => {
  const getPriorityColor = (priority) => {
    return priority === 'high' ? 'destructive' : 'warning';
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          <CardTitle>Operational Recommendations</CardTitle>
        </div>
        <CardDescription>Store-focused insights for optimization</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((rec) => (
            <div
              key={rec.id}
              className="flex flex-col p-4 rounded-lg border border-border bg-gradient-card hover:shadow-md transition-smooth"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant={getPriorityColor(rec.priority)} className="uppercase">
                    {rec.priority}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {rec.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  {rec.confidence}% confidence
                </div>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2">{rec.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                <span className="text-sm font-medium text-primary">{rec.impact}</span>
                <Button size="sm" variant="ghost" className="h-8 gap-1">
                  Take Action
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
