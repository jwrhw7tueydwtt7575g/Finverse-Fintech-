"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const complianceData = [
  { name: "Mon", gst: 120, tds: 45, fema: 23, kyc: 12 },
  { name: "Tue", gst: 95, tds: 52, fema: 31, kyc: 8 },
  { name: "Wed", gst: 110, tds: 48, fema: 26, kyc: 15 },
  { name: "Thu", gst: 88, tds: 41, fema: 19, kyc: 6 },
  { name: "Fri", gst: 130, tds: 58, fema: 35, kyc: 14 },
  { name: "Sat", gst: 75, tds: 35, fema: 18, kyc: 4 },
  { name: "Sun", gst: 62, tds: 28, fema: 12, kyc: 3 },
]

const failedTransactions = [
  { id: "TXN-2024-001", type: "GST Mismatch", amount: "₹45,250", status: "blocked", ruleViolated: "GST Rate Variance" },
  {
    id: "TXN-2024-002",
    type: "KYC Unverified",
    amount: "₹1,20,000",
    status: "blocked",
    ruleViolated: "PEP Check Failed",
  },
  {
    id: "TXN-2024-003",
    type: "TDS Not Computed",
    amount: "₹89,500",
    status: "pending",
    ruleViolated: "TDS Rate Error",
  },
  {
    id: "TXN-2024-004",
    type: "FEMA Limit Exceeded",
    amount: "₹25,00,000",
    status: "blocked",
    ruleViolated: "Forex Limit",
  },
  {
    id: "TXN-2024-005",
    type: "GST Exemption Invalid",
    amount: "₹67,890",
    status: "pending",
    ruleViolated: "Invalid Exemption",
  },
]

const recentActions = [
  { time: "2 min ago", action: "Document uploaded", vendor: "Vendor-1847", status: "success" },
  { time: "8 min ago", action: "KYC verification completed", vendor: "Vendor-2156", status: "success" },
  { time: "15 min ago", action: "Exemption approved", vendor: "Vendor-1923", status: "success" },
  { time: "32 min ago", action: "Rule exception raised", vendor: "Vendor-2541", status: "warning" },
  { time: "1h ago", action: "Policy override requested", vendor: "Vendor-1234", status: "pending" },
]

export default function ComplianceSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Compliance</h1>
        <p className="text-muted-foreground mt-1">Regulatory requirements & policy adherence</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Checked" value="12,847" trend="+8.2%" trendPositive color="blue" />
        <KPICard title="Approved" value="12,102" trend="+12.4%" trendPositive color="green" />
        <KPICard title="Blocked" value="745" trend="-2.1%" trendPositive={false} color="red" />
        <KPICard title="Avg Processing Time" value="1.2s" trend="8% faster" trendPositive color="green" />
      </div>

      {/* Compliance Rules Chart */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Rule Failures Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={complianceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.5)" />
            <YAxis stroke="rgba(255, 255, 255, 0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(20, 30, 60, 0.9)",
                border: "1px solid rgba(51, 165, 255, 0.3)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="gst" fill="#33a5ff" name="GST" />
            <Bar dataKey="tds" fill="#10b981" name="TDS" />
            <Bar dataKey="fema" fill="#f59e0b" name="FEMA" />
            <Bar dataKey="kyc" fill="#ff5555" name="KYC" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Failed Transactions Table */}
      <DataTable
        title="Compliance Status – Failed Transactions"
        columns={[
          { header: "Transaction ID", accessor: "id", width: "150px" },
          { header: "Failure Type", accessor: "type", width: "150px" },
          { header: "Amount", accessor: "amount", width: "120px" },
          {
            header: "Status",
            accessor: "status",
            render: (val) => <StatusBadge status={val} label={val.charAt(0).toUpperCase() + val.slice(1)} />,
          },
          { header: "Rule Violated", accessor: "ruleViolated", width: "200px" },
        ]}
        data={failedTransactions}
      />

      {/* Recent Actions Panel */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Actions</h3>
        <div className="space-y-3">
          {recentActions.map((action, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{action.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{action.vendor}</p>
              </div>
              <div className="text-right">
                <StatusBadge
                  status={action.status}
                  label={action.status.charAt(0).toUpperCase() + action.status.slice(1)}
                />
                <p className="text-xs text-muted-foreground mt-1">{action.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
