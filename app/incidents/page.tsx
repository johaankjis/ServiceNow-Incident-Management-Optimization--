import { DashboardLayout } from "@/components/dashboard-layout"
import { IncidentList } from "@/components/incident-list"

export default function IncidentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">Incidents</h1>
          <p className="text-muted-foreground mt-1">Manage and track all incident tickets</p>
        </div>

        <IncidentList />
      </div>
    </DashboardLayout>
  )
}
