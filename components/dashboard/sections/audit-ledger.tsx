"use client"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"
import StatusBadge from "@/components/dashboard/components/status-badge"

const auditTrail = [
  {
    timestamp: "2024-01-15 14:23:45",
    user: "admin@arealis.com",
    action: "Transaction processed",
    entity: "TXN-2024-8741",
    details: "Amount: ₹5,00,000 | Status: Settled",
    status: "success",
  },
  {
    timestamp: "2024-01-15 14:22:18",
    user: "system",
    action: "Fraud check completed",
    entity: "TXN-2024-8740",
    details: "Risk Score: 0.12 | Result: Low Risk",
    status: "success",
  },
  {
    timestamp: "2024-01-15 14:21:03",
    user: "compliance_officer",
    action: "Manual override",
    entity: "TXN-2024-8739",
    details: "Reason: Vendor relationship | Approved",
    status: "success",
  },
  {
    timestamp: "2024-01-15 14:19:52",
    user: "system",
    action: "Settlement failed",
    entity: "TXN-2024-8738",
    details: "Error: Bank API timeout | Retry queued",
    status: "failed",
  },
  {
    timestamp: "2024-01-15 14:18:34",
    user: "finance_team",
    action: "Report exported",
    entity: "Report-Daily-Recon",
    details: "Format: PDF | Recipient: CFO",
    status: "success",
  },
]

const hashVerification = [
  { block: "Block #12847", hash: "0x7f8a9b3c2d1e4f5g...", status: "valid", verified: "1 min ago" },
  { block: "Block #12846", hash: "0x3e4a5b6c7d8f9g0h...", status: "valid", verified: "5 min ago" },
  { block: "Block #12845", hash: "0x9c2e1a8b3f4d7e5c...", status: "valid", verified: "12 min ago" },
]

export default function AuditLedgerSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Audit Ledger</h1>
        <p className="text-muted-foreground mt-1">Complete transaction audit trail & compliance logs</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Audit Entries" value="12,847" trend="+156 today" trendPositive color="blue" />
        <KPICard title="Integrity Score" value="100%" trend="All valid" trendPositive color="green" />
        <KPICard title="Last Sync" value="2 min" trend="Up to date" trendPositive color="green" />
        <KPICard title="Hash Validity" value="100%" trend="All verified" trendPositive color="green" />
      </div>

      {/* Audit Trail Table */}
      <DataTable
        title="Searchable Audit Trail"
        columns={[
          { header: "Timestamp", accessor: "timestamp", width: "180px" },
          { header: "User", accessor: "user", width: "150px" },
          { header: "Action", accessor: "action", width: "150px" },
          { header: "Entity", accessor: "entity", width: "130px" },
          { header: "Details", accessor: "details", width: "250px" },
          {
            header: "Status",
            accessor: "status",
            render: (val) => <StatusBadge status={val} label={val.charAt(0).toUpperCase() + val.slice(1)} />,
          },
        ]}
        data={auditTrail}
      />

      {/* Hash Verification Block */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Hash Verification Block</h3>
        <div className="space-y-3">
          {hashVerification.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.block}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{item.hash}</p>
              </div>
              <div className="text-right">
                <StatusBadge status="success" label="Valid" />
                <p className="text-xs text-muted-foreground mt-1">{item.verified}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tags */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Event Type Filters</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Transaction Processed",
            "Settlement Event",
            "Fraud Detection",
            "Manual Override",
            "System Error",
            "User Login",
            "Configuration Change",
            "Report Generated",
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-xs font-medium text-foreground transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
