"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"

const railPerformance = [
  { name: "IMPS", successRate: 99.8, avgTime: 1.2, cost: 0.5 },
  { name: "NEFT", successRate: 99.5, avgTime: 2.1, cost: 1.0 },
  { name: "RTGS", successRate: 99.2, avgTime: 3.5, cost: 2.5 },
  { name: "UPI", successRate: 98.9, avgTime: 0.8, cost: 0.0 },
]

const bankPerformance = [
  { bank: "HDFC", uptime: 99.98, avgLatency: 245, transactions: 2145 },
  { bank: "ICICI", uptime: 99.95, avgLatency: 268, transactions: 1856 },
  { bank: "Axis", uptime: 99.92, avgLatency: 312, transactions: 1450 },
  { bank: "Kotak", uptime: 99.87, avgLatency: 356, transactions: 892 },
  { bank: "Yes Bank", uptime: 99.81, avgLatency: 421, transactions: 654 },
]

const routeRecommendations = [
  {
    transactionId: "TXN-2024-8741",
    amount: "₹5,00,000",
    recommendedRail: "IMPS",
    estimatedTime: "1.2s",
    savingsPercentage: 12,
  },
  {
    transactionId: "TXN-2024-8742",
    amount: "₹25,00,000",
    recommendedRail: "RTGS",
    estimatedTime: "3.5s",
    savingsPercentage: 8,
  },
  {
    transactionId: "TXN-2024-8743",
    amount: "₹12,50,000",
    recommendedRail: "NEFT",
    estimatedTime: "2.1s",
    savingsPercentage: 15,
  },
  {
    transactionId: "TXN-2024-8744",
    amount: "₹45,000",
    recommendedRail: "UPI",
    estimatedTime: "0.8s",
    savingsPercentage: 25,
  },
  {
    transactionId: "TXN-2024-8745",
    amount: "₹8,75,000",
    recommendedRail: "IMPS",
    estimatedTime: "1.2s",
    savingsPercentage: 10,
  },
]

const routingDecisions = [
  { time: "2 min ago", transaction: "TXN-2024-8741", decision: "Route via IMPS (Primary)", status: "success" },
  { time: "5 min ago", transaction: "TXN-2024-8740", decision: "Fallback to NEFT", status: "success" },
  { time: "12 min ago", transaction: "TXN-2024-8739", decision: "Route via RTGS (Cost Optimized)", status: "success" },
  { time: "18 min ago", transaction: "TXN-2024-8738", decision: "Route via UPI (Speed Optimized)", status: "success" },
  { time: "25 min ago", transaction: "TXN-2024-8737", decision: "Hybrid routing: IMPS + Fallback", status: "success" },
]

export default function RoutingSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Routing</h1>
        <p className="text-muted-foreground mt-1">Payment rail optimization & routing rules</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Routes Active" value="24" trend="+4 this month" trendPositive color="blue" />
        <KPICard title="Optimization Score" value="94.2%" trend="+1.2%" trendPositive color="green" />
        <KPICard title="Successful Routes" value="2,810" trend="+8.5%" trendPositive color="green" />
        <KPICard title="Failed Routes" value="37" trend="-3.2%" trendPositive color="green" />
      </div>

      {/* Rail Performance Comparison */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Rail Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {railPerformance.map((rail) => (
            <div key={rail.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-sm font-semibold text-foreground">{rail.name}</p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Success Rate</span>
                  <span className="text-sm font-semibold" style={{ color: "#10b981" }}>
                    {rail.successRate}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Avg Time</span>
                  <span className="text-sm font-semibold text-foreground">{rail.avgTime}s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Cost</span>
                  <span className="text-sm font-semibold text-foreground">₹{rail.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routing Savings Summary */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Routing Savings Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
            <p className="text-xs text-muted-foreground">Total Savings Today</p>
            <p className="text-2xl font-bold text-foreground mt-2">₹2.4 Cr</p>
            <p className="text-xs text-green-400 mt-1">vs manual routing</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
            <p className="text-xs text-muted-foreground">Avg Time Saved</p>
            <p className="text-2xl font-bold text-foreground mt-2">0.8s</p>
            <p className="text-xs text-blue-400 mt-1">per transaction</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <p className="text-xs text-muted-foreground">Success Rate Gain</p>
            <p className="text-2xl font-bold text-foreground mt-2">+2.3%</p>
            <p className="text-xs text-amber-400 mt-1">vs default routing</p>
          </div>
        </div>
      </div>

      {/* Bank Performance Heatmap */}
      <DataTable
        title="Bank Performance Heatmap"
        columns={[
          { header: "Bank", accessor: "bank", width: "120px" },
          {
            header: "Uptime",
            accessor: "uptime",
            render: (val) => (
              <span style={{ color: val > 99.9 ? "#10b981" : val > 99.8 ? "#f59e0b" : "#ff5555" }}>{val}%</span>
            ),
          },
          { header: "Avg Latency", accessor: "avgLatency", render: (val) => <span>{val}ms</span> },
          { header: "Transactions", accessor: "transactions", render: (val) => <span>{val.toLocaleString()}</span> },
        ]}
        data={bankPerformance}
      />

      {/* Route Recommendation Table */}
      <DataTable
        title="Live Routing Decisions Feed"
        columns={[
          { header: "Time", accessor: "time", width: "120px" },
          { header: "Transaction", accessor: "transaction", width: "130px" },
          { header: "Decision", accessor: "decision", width: "280px" },
          {
            header: "Status",
            accessor: "status",
            render: (val) => <StatusBadge status={val} label={val.charAt(0).toUpperCase() + val.slice(1)} />,
          },
        ]}
        data={routingDecisions}
      />
    </div>
  )
}
