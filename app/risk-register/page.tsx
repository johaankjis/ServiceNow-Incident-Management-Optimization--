import { DashboardLayout } from "@/components/dashboard-layout"
import { RiskRegister } from "@/components/risk-register"

export default function RiskRegisterPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance">Risk Register</h1>
          <p className="text-muted-foreground mt-1">Track and manage high-priority incident risks</p>
        </div>

        <RiskRegister />
      </div>
    </DashboardLayout>
  )
}
