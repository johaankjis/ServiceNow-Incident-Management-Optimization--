import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricsOverview } from "@/components/metrics-overview"
import { IncidentTrends } from "@/components/incident-trends"
import { SLACompliance } from "@/components/sla-compliance"
import { RecentIncidents } from "@/components/recent-incidents"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor incident management performance and SLA compliance</p>
        </div>

        <MetricsOverview />

        <div className="grid gap-6 lg:grid-cols-2">
          <IncidentTrends />
          <SLACompliance />
        </div>

        <RecentIncidents />
      </div>
    </DashboardLayout>
  )
}
