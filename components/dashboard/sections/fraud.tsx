"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const riskDistribution = [
  { name: "Low Risk", value: 2145, color: "#33a5ff" },
  { name: "Medium Risk", value: 654, color: "#f59e0b" },
  { name: "High Risk", value: 48, color: "#ff5555" },
]

const riskTrend = [
  { date: "Mon", highRisk: 52, mediumRisk: 680, lowRisk: 2100 },
  { date: "Tue", highRisk: 48, mediumRisk: 672, lowRisk: 2120 },
  { date: "Wed", highRisk: 51, mediumRisk: 695, lowRisk: 2095 },
  { date: "Thu", highRisk: 45, mediumRisk: 658, lowRisk: 2150 },
  { date: "Fri", highRisk: 55, mediumRisk: 710, lowRisk: 2080 },
  { date: "Sat", highRisk: 38, mediumRisk: 620, lowRisk: 2200 },
  { date: "Sun", highRisk: 48, mediumRisk: 654, lowRisk: 2145 },
]

const highRiskTransactions = [
  {
    id: "TXN-2024-5847",
    amount: "₹45,00,000",
    vendor: "Vendor-9824",
    risk: "high",
    reason: "Velocity spike: 5x normal",
  },
  {
    id: "TXN-2024-5846",
    amount: "₹28,50,000",
    vendor: "Vendor-1923",
    risk: "high",
    reason: "Geographic anomaly detected",
  },
  { id: "TXN-2024-5845", amount: "₹82,00,000", vendor: "Vendor-7654", risk: "high", reason: "Account behavior change" },
  { id: "TXN-2024-5844", amount: "₹19,50,000", vendor: "Vendor-5432", risk: "high", reason: "Failed KYC threshold" },
  {
    id: "TXN-2024-5843",
    amount: "₹56,25,000",
    vendor: "Vendor-2891",
    risk: "high",
    reason: "Blacklist match score 0.89",
  },
]

const anomalyEvents = [
  { time: "2 min ago", event: "Velocity spike detected", vendor: "Vendor-9824", severity: "high" },
  { time: "8 min ago", event: "Location deviation: India to Singapore", vendor: "Vendor-5678", severity: "high" },
  { time: "15 min ago", event: "Account change detected", vendor: "Vendor-1923", severity: "medium" },
  { time: "32 min ago", event: "Unusual transaction amount", vendor: "Vendor-4521", severity: "medium" },
  { time: "1h ago", event: "Model anomaly: Score 0.92", vendor: "Vendor-3456", severity: "high" },
]

export default function FraudSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Fraud Detection</h1>
        <p className="text-muted-foreground mt-1">Anomaly detection & risk assessment</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="High Risk" value="48" trend="-5.2%" trendPositive color="red" />
        <KPICard title="Medium Risk" value="654" trend="+2.1%" trendPositive={false} color="amber" />
        <KPICard title="Low Risk" value="2,145" trend="+3.8%" trendPositive color="green" />
        <KPICard title="Avg Risk Score" value="0.24" trend="0.89%" trendPositive={false} color="blue" />
      </div>

      {/* Risk Distribution Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="rounded-lg border border-white/10 p-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Risk Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "rgba(20, 30, 60, 0.9)", border: "1px solid rgba(51, 165, 255, 0.3)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Model Insights Card */}
        <div
          className="rounded-lg border border-white/10 p-6 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Fraud Model Insights</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Detection Accuracy</span>
              <span className="text-sm font-semibold text-foreground">99.2%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full" style={{ width: "99.2%" }} />
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-muted-foreground">False Positive Rate</span>
              <span className="text-sm font-semibold" style={{ color: "#10b981" }}>
                0.8%
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full"
                style={{ width: "8%" }}
              />
            </div>
            <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-muted-foreground">Top Feature: Velocity deviation (importance: 0.34)</p>
              <p className="text-xs text-muted-foreground mt-1">Model Version: RF-v3.2 | Last Retraining: 2h ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* High Risk Transactions */}
      <DataTable
        title="High-Risk Transaction List"
        columns={[
          { header: "Transaction ID", accessor: "id", width: "150px" },
          { header: "Amount", accessor: "amount", width: "120px" },
          { header: "Vendor", accessor: "vendor", width: "120px" },
          {
            header: "Risk Level",
            accessor: "risk",
            render: (val) => <StatusBadge status={val} label={val.charAt(0).toUpperCase() + val.slice(1)} />,
          },
          { header: "Reason", accessor: "reason", width: "250px" },
        ]}
        data={highRiskTransactions}
      />

      {/* Anomaly Events Feed */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Anomaly Events Feed</h3>
        <div className="space-y-3">
          {anomalyEvents.map((event, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{event.event}</p>
                <p className="text-xs text-muted-foreground mt-1">{event.vendor}</p>
              </div>
              <div className="text-right">
                <StatusBadge
                  status={event.severity}
                  label={event.severity.charAt(0).toUpperCase() + event.severity.slice(1)}
                />
                <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
