import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const risks = [
  {
    id: "RISK-001",
    title: "Database failover mechanism untested",
    impact: "High",
    probability: "Medium",
    category: "Infrastructure",
    owner: "Sarah Chen",
    mitigation: "Schedule quarterly DR drills",
    status: "Active",
  },
  {
    id: "RISK-002",
    title: "Single point of failure in authentication service",
    impact: "Critical",
    probability: "Low",
    category: "Security",
    owner: "Mike Johnson",
    mitigation: "Implement redundant auth servers",
    status: "In Progress",
  },
  {
    id: "RISK-003",
    title: "Insufficient monitoring for API rate limits",
    impact: "Medium",
    probability: "High",
    category: "Performance",
    owner: "Lisa Park",
    mitigation: "Deploy enhanced monitoring dashboards",
    status: "Active",
  },
  {
    id: "RISK-004",
    title: "Legacy system dependencies nearing EOL",
    impact: "High",
    probability: "High",
    category: "Technical Debt",
    owner: "David Kim",
    mitigation: "Migration plan to modern stack",
    status: "Planning",
  },
]

const impactColors = {
  Critical: "bg-destructive/10 text-destructive border-destructive/20",
  High: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Medium: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  Low: "bg-muted text-muted-foreground border-border",
}

export function RiskRegister() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Risk
        </Button>
      </div>

      <div className="grid gap-4">
        {risks.map((risk) => (
          <Card key={risk.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-muted-foreground">{risk.id}</span>
                  <Badge variant="outline" className={impactColors[risk.impact as keyof typeof impactColors]}>
                    {risk.impact} Impact
                  </Badge>
                  <Badge variant="outline">{risk.probability} Probability</Badge>
                </div>
                <h3 className="text-lg font-semibold text-pretty">{risk.title}</h3>
              </div>
              <Badge variant="secondary">{risk.status}</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm text-muted-foreground">Category</div>
                <div className="text-sm font-medium mt-1">{risk.category}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Risk Owner</div>
                <div className="text-sm font-medium mt-1">{risk.owner}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-sm text-muted-foreground">Mitigation Strategy</div>
                <div className="text-sm font-medium mt-1">{risk.mitigation}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
