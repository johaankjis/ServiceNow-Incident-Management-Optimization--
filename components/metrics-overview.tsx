import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Clock, AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react"

const metrics = [
  {
    label: "Mean Time to Resolution",
    value: "4.2 hrs",
    change: "-25%",
    trend: "down",
    icon: Clock,
    description: "Average resolution time",
  },
  {
    label: "SLA Compliance",
    value: "94.3%",
    change: "+8%",
    trend: "up",
    icon: CheckCircle2,
    description: "On-time resolution rate",
  },
  {
    label: "Escalation Cycles",
    value: "2.1 avg",
    change: "-20%",
    trend: "down",
    icon: AlertTriangle,
    description: "Average escalations per incident",
  },
  {
    label: "Overdue Tickets",
    value: "12",
    change: "-15%",
    trend: "down",
    icon: TrendingDown,
    description: "Past SLA deadline",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <metric.icon className="h-5 w-5 text-primary" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === "down" ? "text-chart-2" : "text-chart-1"
              }`}
            >
              {metric.trend === "down" ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
              {metric.change}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-semibold tracking-tight">{metric.value}</div>
            <div className="text-sm font-medium text-foreground mt-1">{metric.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{metric.description}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
