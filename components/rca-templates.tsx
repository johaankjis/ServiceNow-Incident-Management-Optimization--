import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

const rcaTemplates = [
  {
    id: "RCA-001",
    incident: "INC0012448 - Mobile app crash on iOS devices",
    date: "2024-01-14",
    analyst: "Sarah Chen",
    rootCause: "Memory leak in image caching library",
    impact: "~2,500 users affected, 4-hour outage",
    resolution: "Updated library to v3.2.1, implemented memory monitoring",
    preventiveMeasures: [
      "Add automated memory profiling to CI/CD",
      "Implement crash analytics dashboard",
      "Schedule quarterly dependency audits",
    ],
    status: "Completed",
  },
  {
    id: "RCA-002",
    incident: "INC0012445 - Payment processing delays",
    date: "2024-01-12",
    analyst: "Mike Johnson",
    rootCause: "Database connection pool exhaustion",
    impact: "~500 transactions delayed, avg 15min delay",
    resolution: "Increased connection pool size, optimized queries",
    preventiveMeasures: [
      "Implement connection pool monitoring",
      "Set up auto-scaling for database connections",
      "Review and optimize slow queries monthly",
    ],
    status: "Completed",
  },
  {
    id: "RCA-003",
    incident: "INC0012453 - Database connection timeout",
    date: "2024-01-15",
    analyst: "Lisa Park",
    rootCause: "Investigation in progress",
    impact: "Intermittent timeouts affecting ~100 users",
    resolution: "Temporary: Increased timeout threshold",
    preventiveMeasures: ["To be determined after root cause identified"],
    status: "In Progress",
  },
]

export function RCATemplates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{rcaTemplates.length} RCA reports available</div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <FileText className="h-4 w-4" />
          New RCA
        </Button>
      </div>

      <div className="grid gap-6">
        {rcaTemplates.map((rca) => (
          <Card key={rca.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-muted-foreground">{rca.id}</span>
                  <Badge variant={rca.status === "Completed" ? "secondary" : "outline"}>{rca.status}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-pretty">{rca.incident}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Analyst: {rca.analyst}</span>
                  <span>•</span>
                  <span>{rca.date}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Root Cause</div>
                <div className="text-sm">{rca.rootCause}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Impact</div>
                <div className="text-sm">{rca.impact}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Resolution</div>
                <div className="text-sm">{rca.resolution}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Preventive Measures</div>
                <ul className="space-y-1">
                  {rca.preventiveMeasures.map((measure, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">•</span>
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
