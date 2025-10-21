"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

const allIncidents = [
  {
    id: "INC0012453",
    title: "Database connection timeout in production",
    priority: "Critical",
    status: "In Progress",
    assignee: "Sarah Chen",
    created: "2024-01-15 14:30",
    sla: "On Track",
    category: "Infrastructure",
  },
  {
    id: "INC0012452",
    title: "Email service intermittent failures",
    priority: "High",
    status: "Investigating",
    assignee: "Mike Johnson",
    created: "2024-01-15 12:15",
    sla: "At Risk",
    category: "Application",
  },
  {
    id: "INC0012451",
    title: "User unable to access dashboard",
    priority: "Medium",
    status: "Assigned",
    assignee: "Lisa Park",
    created: "2024-01-15 10:45",
    sla: "On Track",
    category: "Access",
  },
  {
    id: "INC0012450",
    title: "Slow page load times reported",
    priority: "Low",
    status: "Pending",
    assignee: "Unassigned",
    created: "2024-01-15 09:20",
    sla: "On Track",
    category: "Performance",
  },
  {
    id: "INC0012449",
    title: "API rate limit exceeded",
    priority: "High",
    status: "Resolved",
    assignee: "David Kim",
    created: "2024-01-14 16:00",
    sla: "On Track",
    category: "Infrastructure",
  },
  {
    id: "INC0012448",
    title: "Mobile app crash on iOS devices",
    priority: "Critical",
    status: "Resolved",
    assignee: "Sarah Chen",
    created: "2024-01-14 11:30",
    sla: "Breached",
    category: "Application",
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

export function IncidentList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredIncidents = allIncidents.filter(
    (incident) =>
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search incidents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Title</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Priority</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Assignee</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">SLA</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredIncidents.map((incident) => (
              <tr key={incident.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                <td className="py-3 px-4">
                  <span className="text-sm font-mono">{incident.id}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="text-sm font-medium text-pretty max-w-md">{incident.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{incident.category}</div>
                </td>
                <td className="py-3 px-4">
                  <Badge variant="outline" className={priorityColors[incident.priority as keyof typeof priorityColors]}>
                    {incident.priority}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm">{incident.status}</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm">{incident.assignee}</span>
                </td>
                <td className="py-3 px-4">
                  <Badge variant="outline" className={slaColors[incident.sla as keyof typeof slaColors]}>
                    {incident.sla}
                  </Badge>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-muted-foreground">{incident.created}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
