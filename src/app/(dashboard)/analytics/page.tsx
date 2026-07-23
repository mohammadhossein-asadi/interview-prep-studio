"use client";

import { AnimatedPage } from "@/components/shared/animated-page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { useProgressStore } from "@/stores";

const radarData = [
  { subject: "HTML/CSS", A: 80 },
  { subject: "JavaScript", A: 70 },
  { subject: "React", A: 65 },
  { subject: "TypeScript", A: 55 },
  { subject: "Node.js", A: 45 },
  { subject: "Algorithms", A: 40 },
  { subject: "System Design", A: 35 },
];

const weeklyData = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 60 },
  { day: "Thu", minutes: 25 },
  { day: "Fri", minutes: 50 },
  { day: "Sat", minutes: 90 },
  { day: "Sun", minutes: 40 },
];

export default function AnalyticsPage() {
  return (
    <AnimatedPage>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed insights into your preparation progress.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Skill Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="minutes"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Topic Mastery */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Topic Mastery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { topic: "HTML/CSS", mastery: 80 },
                { topic: "JavaScript", mastery: 70 },
                { topic: "React", mastery: 65 },
                { topic: "TypeScript", mastery: 55 },
                { topic: "Node.js", mastery: 45 },
                { topic: "Algorithms", mastery: 40 },
                { topic: "System Design", mastery: 35 },
              ].map((item) => (
                <div key={item.topic}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{item.topic}</span>
                    <span className="text-muted-foreground">{item.mastery}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${item.mastery}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  );
}
