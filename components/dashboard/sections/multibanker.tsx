"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const cashFlowData = [
  { time: "00:00", inflow: 450, outflow: 280 },
  { time: "04:00", inflow: 320, outflow: 450 },
  { time: "08:00", inflow: 1250, outflow: 980 },
  { time: "12:00", inflow: 2100, outflow: 1850 },
  { time: "16:00", inflow: 1650, outflow: 1420 },
  { time: "20:00", inflow: 850, outflow: 680 },
]

const bankCards = [
  { name: "HDFC", balance: "₹125.4 Cr", accountCount: 12, uptime: 99.98, lastSync: "2 min ago" },
  { name: "ICICI", balance: "₹98.2 Cr", accountCount: 8, uptime: 99.95, lastSync: "5 min ago" },
  { name: "Axis", balance: "₹76.5 Cr", accountCount: 6, uptime: 99.92, lastSync: "3 min ago" },
  { name: "Kotak", balance: "₹54.3 Cr", accountCount: 4, uptime: 99.87, lastSync: "8 min ago" },
]

const bankUptime = [
  { bank: "HDFC", uptime: 99.98, incidents: 0, avgLatency: "245ms" },
  { bank: "ICICI", uptime: 99.95, incidents: 1, avgLatency: "268ms" },
  { bank: "Axis", uptime: 99.92, incidents: 2, avgLatency: "312ms" },
  { bank: "Kotak", uptime: 99.87, incidents: 3, avgLatency: "356ms" },
  { bank: "Yes Bank", uptime: 99.81, incidents: 4, avgLatency: "421ms" },
]

const bankEvents = [
  {
    time: "2 min ago",
    bank: "HDFC",
    event: "API response time spike",
    severity: "medium",
    resolution: "Auto-mitigated",
  },
  {
    time: "15 min ago",
    bank: "Axis",
    event: "Connection timeout (1 min)",
    severity: "high",
    resolution: "Failover triggered",
  },
  {
    time: "1h 20 min ago",
    bank: "ICICI",
    event: "Certificate renewal",
    severity: "info",
    resolution: "Completed successfully",
  },
  {
    time: "3h 45 min ago",
    bank: "Kotak",
    event: "Scheduled maintenance window",
    severity: "info",
    resolution: "Completed",
  },
]

const transactions = [
  { direction: "Incoming", count: 1450, volume: "₹45.2 Cr", avgAmount: "₹3.12 L", status: "success" },
  { direction: "Outgoing", count: 1360, volume: "₹42.8 Cr", avgAmount: "₹3.15 L", status: "success" },
]

export default function MultibankerSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Multi-Bank</h1>
        <p className="text-muted-foreground mt-1">Cross-bank connectivity & management</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Connected Banks" value="12" trend="+2 this month" trendPositive color="blue" />
        <KPICard title="API Status" value="100%" trend="No issues" trendPositive color="green" />
        <KPICard title="Total Balance" value="₹354.4 Cr" trend="+5.2%" trendPositive color="green" />
        <KPICard title="Avg Latency" value="296ms" trend="-8% improvement" trendPositive color="green" />
      </div>

      {/* Bank Balance Cards */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Individual Bank Balances</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bankCards.map((bank) => (
            <div
              key={bank.name}
              className="rounded-lg border border-white/10 p-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-semibold text-foreground">{bank.name}</p>
                <StatusBadge status="success" label="Live" />
              </div>
              <p className="text-xl font-bold text-foreground mb-3">{bank.balance}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accounts</span>
                  <span className="text-foreground">{bank.accountCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime</span>
                  <span style={{ color: "#10b981" }}>{bank.uptime}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Sync</span>
                  <span className="text-foreground">{bank.lastSync}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Cash Flow (24h)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="time" stroke="rgba(255, 255, 255, 0.5)" />
            <YAxis stroke="rgba(255, 255, 255, 0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(20, 30, 60, 0.9)", border: "1px solid rgba(51, 165, 255, 0.3)" }}
            />
            <Line type="monotone" dataKey="inflow" stroke="#10b981" strokeWidth={2} name="Inflow" />
            <Line type="monotone" dataKey="outflow" stroke="#ff5555" strokeWidth={2} name="Outflow" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bank Health Uptime */}
      <DataTable
        title="Bank Health Uptime Indicators"
        columns={[
          { header: "Bank", accessor: "bank", width: "100px" },
          {
            header: "Uptime",
            accessor: "uptime",
            render: (val) => (
              <span style={{ color: val > 99.9 ? "#10b981" : val > 99.8 ? "#f59e0b" : "#ff5555" }}>{val}%</span>
            ),
          },
          { header: "Incidents", accessor: "incidents", width: "100px" },
          { header: "Avg Latency", accessor: "avgLatency", width: "120px" },
        ]}
        data={bankUptime}
      />

      {/* Recent Bank Events */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Bank Events</h3>
        <div className="space-y-3">
          {bankEvents.map((event, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {event.bank} – {event.event}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{event.resolution}</p>
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

      {/* Transaction Summary */}
      <DataTable
        title="Incoming/Outgoing Transactions"
        columns={[
          { header: "Direction", accessor: "direction", width: "100px" },
          { header: "Count", accessor: "count", render: (val) => <span>{val.toLocaleString()}</span> },
          { header: "Volume", accessor: "volume", width: "120px" },
          { header: "Avg Amount", accessor: "avgAmount", width: "120px" },
          { header: "Status", accessor: "status", render: (val) => <StatusBadge status={val} label="Success" /> },
        ]}
        data={transactions}
      />
    </div>
  )
}
