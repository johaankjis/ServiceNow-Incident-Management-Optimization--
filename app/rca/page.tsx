import { DashboardLayout } from "@/components/dashboard-layout"
import { RCATemplates } from "@/components/rca-templates"

export default function RCAPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">Root Cause Analysis</h1>
          <p className="text-muted-foreground mt-1">Standardized RCA templates for incident investigation</p>
        </div>

        <RCATemplates />
      </div>
    </DashboardLayout>
  )
}
