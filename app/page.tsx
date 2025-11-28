"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import Header from "@/components/dashboard/header"
import OverviewSection from "@/components/dashboard/sections/overview"
import ComplianceSection from "@/components/dashboard/sections/compliance"
import FraudSection from "@/components/dashboard/sections/fraud"
import RoutingSection from "@/components/dashboard/sections/routing"
import SettlementSection from "@/components/dashboard/sections/settlement"
import ReconciliationSection from "@/components/dashboard/sections/reconciliation"
import MultibankerSection from "@/components/dashboard/sections/multibanker"
import AuditLedgerSection from "@/components/dashboard/sections/audit-ledger"
import ExplainabilitySection from "@/components/dashboard/sections/explainability"
import SettingsSection from "@/components/dashboard/sections/settings"
import IntegrationsSection from "@/components/dashboard/sections/integrations"

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />
      case "compliance":
        return <ComplianceSection />
      case "fraud":
        return <FraudSection />
      case "routing":
        return <RoutingSection />
      case "settlement":
        return <SettlementSection />
      case "reconciliation":
        return <ReconciliationSection />
      case "multibanker":
        return <MultibankerSection />
      case "audit-ledger":
        return <AuditLedgerSection />
      case "explainability":
        return <ExplainabilitySection />
      case "settings":
        return <SettingsSection />
      case "integrations":
        return <IntegrationsSection />
      default:
        return <OverviewSection />
    }
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">{renderSection()}</div>
        </main>
      </div>
    </div>
  )
}
