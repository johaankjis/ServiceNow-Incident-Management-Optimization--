"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Week 1", incidents: 145, resolved: 132 },
  { date: "Week 2", incidents: 158, resolved: 149 },
  { date: "Week 3", incidents: 142, resolved: 138 },
  { date: "Week 4", incidents: 135, resolved: 131 },
  { date: "Week 5", incidents: 128, resolved: 125 },
  { date: "Week 6", incidents: 118, resolved: 116 },
  { date: "Week 7", incidents: 112, resolved: 110 },
  { date: "Week 8", incidents: 105, resolved: 104 },
]

export function IncidentTrends() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Incident Trends</h3>
        <p className="text-sm text-muted-foreground mt-1">Weekly incident volume and resolution rate</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line type="monotone" dataKey="incidents" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="resolved" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Incidents</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-2" />
          <span className="text-sm text-muted-foreground">Resolved</span>
        </div>
      </div>
    </Card>
  )
}
