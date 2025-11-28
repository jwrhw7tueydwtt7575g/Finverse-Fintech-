"use client"
import { TrendingUp, AlertCircle, Clock, CheckCircle } from "lucide-react"
import MetricCard from "@/components/dashboard/components/metric-card"
import LiveFunnel from "@/components/dashboard/components/live-funnel"
import RecentEvents from "@/components/dashboard/components/recent-events"
import OpenTasks from "@/components/dashboard/components/open-tasks"
import OverdueChart from "@/components/dashboard/components/overdue-chart"

export default function OverviewSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Overview</h1>
        <p className="text-muted-foreground mt-1">Real-time payments intelligence dashboard</p>
      </div>

      {/* Section A: Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Today's Volume"
          value="₹8.4 Cr"
          subtitle="2,847 transactions"
          trend="+18.2%"
          trendPositive
          icon={<TrendingUp className="w-5 h-5" />}
          chart="volume"
        />
        <MetricCard
          title="Success Rate"
          value="98.7%"
          subtitle="2,810 success / 37 failed"
          trend="+0.3%"
          trendPositive
          icon={<CheckCircle className="w-5 h-5" />}
          chart="rate"
        />
        <MetricCard
          title="Avg Time to Settle"
          value="2.4 min"
          subtitle="144 seconds avg"
          trend="12% faster"
          trendPositive
          icon={<Clock className="w-5 h-5" />}
          chart="time"
        />
        <MetricCard
          title="Approvals Pending"
          value="24"
          subtitle="12 high priority"
          trend="3 expiring soon"
          trendPositive={false}
          icon={<AlertCircle className="w-5 h-5" />}
          chart="pending"
        />
      </div>

      {/* Section B: Live Funnel */}
      <LiveFunnel />

      {/* Sections C & D: Recent Events & Open Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentEvents />
        </div>
        <div>
          <OpenTasks />
        </div>
      </div>

      {/* Section E: Overdue by Category */}
      <OverdueChart />
    </div>
  )
}
