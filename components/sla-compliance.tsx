"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { priority: "Critical", compliance: 98, target: 95 },
  { priority: "High", compliance: 95, target: 90 },
  { priority: "Medium", compliance: 92, target: 85 },
  { priority: "Low", compliance: 88, target: 80 },
]

export function SLACompliance() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">SLA Compliance by Priority</h3>
        <p className="text-sm text-muted-foreground mt-1">Current compliance vs target thresholds</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="priority"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="compliance" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-muted" />
          <span className="text-sm text-muted-foreground">Target</span>
        </div>
      </div>
    </Card>
  )
}
