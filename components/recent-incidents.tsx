import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const incidents = [
  {
    id: "INC0012453",
    title: "Database connection timeout in production",
    priority: "Critical",
    status: "In Progress",
    assignee: "Sarah Chen",
    created: "2 hours ago",
    sla: "On Track",
  },
  {
    id: "INC0012452",
    title: "Email service intermittent failures",
    priority: "High",
    status: "Investigating",
    assignee: "Mike Johnson",
    created: "4 hours ago",
    sla: "At Risk",
  },
  {
    id: "INC0012451",
    title: "User unable to access dashboard",
    priority: "Medium",
    status: "Assigned",
    assignee: "Lisa Park",
    created: "6 hours ago",
    sla: "On Track",
  },
  {
    id: "INC0012450",
    title: "Slow page load times reported",
    priority: "Low",
    status: "Pending",
    assignee: "Unassigned",
    created: "8 hours ago",
    sla: "On Track",
  },
]

const priorityColors = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Medium: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  Low: "bg-muted text-muted-foreground border-border",
}

const slaColors = {
  "On Track": "bg-chart-2/10 text-chart-2 border-chart-2/20",
  "At Risk": "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Breached: "bg-destructive/10 text-destructive border-destructive/20",
}

export function RecentIncidents() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Incidents</h3>
          <p className="text-sm text-muted-foreground mt-1">Latest incident tickets requiring attention</p>
        </div>
        <Link href="/incidents">
          <Button variant="ghost" size="sm" className="gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-start gap-4 rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-muted-foreground">{incident.id}</span>
                <Badge variant="outline" className={priorityColors[incident.priority as keyof typeof priorityColors]}>
                  {incident.priority}
                </Badge>
                <Badge variant="outline" className={slaColors[incident.sla as keyof typeof slaColors]}>
                  {incident.sla}
                </Badge>
              </div>
              <div className="font-medium text-pretty">{incident.title}</div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Status: {incident.status}</span>
                <span>•</span>
                <span>Assignee: {incident.assignee}</span>
                <span>•</span>
                <span>{incident.created}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
