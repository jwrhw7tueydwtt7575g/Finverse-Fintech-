"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"

const matchVisualization = [
  { category: "Full Match", value: 2487, percentage: 87.3, color: "#10b981" },
  { category: "Partial Match", value: 286, percentage: 10.1, color: "#f59e0b" },
  { category: "Unreconciled", value: 74, percentage: 2.6, color: "#ff5555" },
]

const mismatchReasons = [
  { reason: "Timing difference", count: 156, percentage: 54.4 },
  { reason: "Amount variance", count: 68, percentage: 23.7 },
  { reason: "Reference mismatch", count: 42, percentage: 14.6 },
  { reason: "Duplicate detection", count: 20, percentage: 7.0 },
  { reason: "Metadata error", count: 14, percentage: 4.9 },
]

const unreconciled = [
  {
    id: "UNREC-2024-001",
    internalRef: "INT-8741",
    externalRef: "EXT-5621",
    amount: "₹45,250",
    discrepancy: "Amount mismatch by ₹1,000",
    daysOld: 3,
  },
  {
    id: "UNREC-2024-002",
    internalRef: "INT-8740",
    externalRef: "EXT-5620",
    amount: "₹1,20,000",
    discrepancy: "Date variance (1 day)",
    daysOld: 2,
  },
  {
    id: "UNREC-2024-003",
    internalRef: "INT-8739",
    externalRef: "N/A",
    amount: "₹89,500",
    discrepancy: "Missing in external",
    daysOld: 5,
  },
  {
    id: "UNREC-2024-004",
    internalRef: "N/A",
    externalRef: "EXT-5618",
    amount: "₹25,000",
    discrepancy: "Missing in internal",
    daysOld: 4,
  },
]

const reconActivity = [
  { time: "2 min ago", activity: "Auto-reconciliation completed", count: "1,250 items", status: "success" },
  { time: "15 min ago", activity: "Rule-based matching executed", count: "856 items", status: "success" },
  { time: "32 min ago", activity: "Exception flagged", count: "23 items", status: "warning" },
  { time: "1h 15 min ago", activity: "Manual recon session started", count: "142 items", status: "success" },
  { time: "2h 30 min ago", activity: "Batch reconciliation run", count: "2,847 items", status: "success" },
]

export default function ReconciliationSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reconciliation</h1>
        <p className="text-muted-foreground mt-1">Account reconciliation & matching engine</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Full Match" value="2,487" trend="+4.2%" trendPositive color="green" />
        <KPICard title="Partial Match" value="286" trend="+1.5%" trendPositive={false} color="amber" />
        <KPICard title="Unreconciled" value="74" trend="-3.8%" trendPositive color="green" />
        <KPICard title="Avg Time" value="0.84s" trend="12% faster" trendPositive color="green" />
      </div>

      {/* 3-way Match Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="rounded-lg border border-white/10 p-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">3-Way Match Status</h3>
          <div className="space-y-4">
            {matchVisualization.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">{item.category}</span>
                  <span className="text-sm font-semibold" style={{ color: item.color }}>
                    {item.value} ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mismatch Reasons Summary */}
        <div
          className="rounded-lg border border-white/10 p-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Mismatch Reasons</h3>
          <div className="space-y-3">
            {mismatchReasons.map((item) => (
              <div key={item.reason} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{item.reason}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">{item.count}</span>
                  <div className="w-20 bg-white/10 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-cyan-400" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unreconciled Transactions */}
      <DataTable
        title="Unreconciled Transactions"
        columns={[
          { header: "Reference", accessor: "id", width: "140px" },
          { header: "Internal Ref", accessor: "internalRef", width: "120px" },
          { header: "External Ref", accessor: "externalRef", width: "120px" },
          { header: "Amount", accessor: "amount", width: "100px" },
          { header: "Discrepancy", accessor: "discrepancy", width: "250px" },
          {
            header: "Days Old",
            accessor: "daysOld",
            render: (val) => <span style={{ color: val > 3 ? "#ff5555" : "#f59e0b" }}>{val}d</span>,
          },
        ]}
        data={unreconciled}
      />

      {/* Recent Recon Activity */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Reconciliation Activity</h3>
        <div className="space-y-3">
          {reconActivity.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.activity}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.count}</p>
              </div>
              <div className="text-right">
                <StatusBadge
                  status={activity.status}
                  label={activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                />
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
