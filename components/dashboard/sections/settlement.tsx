"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const settlementTimeline = [
  { time: "00:00", settled: 0, inTransit: 500, pending: 2847, failed: 0 },
  { time: "04:00", settled: 450, inTransit: 350, pending: 1900, failed: 12 },
  { time: "08:00", settled: 1250, inTransit: 200, pending: 1100, failed: 18 },
  { time: "12:00", settled: 2100, inTransit: 450, pending: 210, failed: 25 },
  { time: "16:00", settled: 2650, inTransit: 140, pending: 45, failed: 28 },
  { time: "20:00", settled: 2810, inTransit: 0, pending: 0, failed: 37 },
]

const railSettlement = [
  { rail: "IMPS", count: 1450, avgTime: "1.2 min", successRate: 99.8 },
  { rail: "NEFT", count: 890, avgTime: "2.8 min", successRate: 99.5 },
  { rail: "RTGS", count: 380, avgTime: "4.1 min", successRate: 99.2 },
  { rail: "Others", count: 90, avgTime: "3.5 min", successRate: 98.9 },
]

const pendingSettlements = [
  { id: "STL-2024-2847", amount: "₹45,00,000", rail: "RTGS", status: "pending", timeRemaining: "Due in 45 min" },
  { id: "STL-2024-2846", amount: "₹28,50,000", rail: "NEFT", status: "pending", timeRemaining: "Due in 2h 15 min" },
  { id: "STL-2024-2845", amount: "₹12,50,000", rail: "IMPS", status: "pending", timeRemaining: "Due in 1h 30 min" },
  { id: "STL-2024-2844", amount: "₹56,25,000", rail: "RTGS", status: "pending", timeRemaining: "Due in 3h" },
]

const exceptionAlerts = [
  {
    time: "2 min ago",
    settlement: "STL-2024-2841",
    exception: "Bank API timeout",
    severity: "high",
    action: "Retry initiated",
  },
  {
    time: "8 min ago",
    settlement: "STL-2024-2840",
    exception: "Insufficient liquidity",
    severity: "high",
    action: "Manual review",
  },
  {
    time: "15 min ago",
    settlement: "STL-2024-2839",
    exception: "Account blocked",
    severity: "medium",
    action: "Investigation",
  },
  {
    time: "32 min ago",
    settlement: "STL-2024-2838",
    exception: "Network error",
    severity: "medium",
    action: "Retry scheduled",
  },
]

export default function SettlementSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settlement</h1>
        <p className="text-muted-foreground mt-1">End-of-day settlement & liquidity management</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Settled" value="₹84.2 Cr" trend="+12.4%" trendPositive color="green" />
        <KPICard title="In Transit" value="₹8.5 Cr" trend="-2.1%" trendPositive color="blue" />
        <KPICard title="Pending" value="₹2.1 Cr" trend="+0.8%" trendPositive={false} color="amber" />
        <KPICard title="Failed" value="₹1.2 Cr" trend="-5.3%" trendPositive color="green" />
      </div>

      {/* Settlement Timeline */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Settlement Timeline (24h)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={settlementTimeline}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="time" stroke="rgba(255, 255, 255, 0.5)" />
            <YAxis stroke="rgba(255, 255, 255, 0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(20, 30, 60, 0.9)", border: "1px solid rgba(51, 165, 255, 0.3)" }}
            />
            <Area type="monotone" dataKey="settled" stackId="1" stroke="#10b981" fill="#10b98166" />
            <Area type="monotone" dataKey="inTransit" stackId="1" stroke="#33a5ff" fill="#33a5ff66" />
            <Area type="monotone" dataKey="pending" stackId="1" stroke="#f59e0b" fill="#f59e0b66" />
            <Area type="monotone" dataKey="failed" stackId="1" stroke="#ff5555" fill="#ff555566" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Rail-wise Settlement Performance */}
      <DataTable
        title="Rail-wise Settlement Performance"
        columns={[
          { header: "Rail", accessor: "rail", width: "100px" },
          { header: "Transactions", accessor: "count", render: (val) => <span>{val.toLocaleString()}</span> },
          { header: "Avg Settlement Time", accessor: "avgTime", width: "150px" },
          {
            header: "Success Rate",
            accessor: "successRate",
            render: (val) => <span style={{ color: "#10b981" }}>{val}%</span>,
          },
        ]}
        data={railSettlement}
      />

      {/* Pending Settlements */}
      <DataTable
        title="Pending Settlements"
        columns={[
          { header: "Settlement ID", accessor: "id", width: "130px" },
          { header: "Amount", accessor: "amount", width: "120px" },
          { header: "Rail", accessor: "rail", width: "80px" },
          { header: "Status", accessor: "status", render: (val) => <StatusBadge status={val} label="Pending" /> },
          { header: "Timeline", accessor: "timeRemaining", width: "150px" },
        ]}
        data={pendingSettlements}
      />

      {/* Exception Alerts */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Exception Alerts Panel</h3>
        <div className="space-y-3">
          {exceptionAlerts.map((alert, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{alert.exception}</p>
                  <StatusBadge
                    status={alert.severity}
                    label={alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Settlement: {alert.settlement}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-foreground">{alert.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
