"use client"

import { MessageSquare } from "lucide-react"
import { KPICard } from "@/components/dashboard/components/kpi-cards-row"
import DataTable from "@/components/dashboard/components/data-table"

const sampleQuestions = [
  "Why was this transaction flagged as high risk?",
  "What factors contributed to the fraud detection?",
  "How did the model decide this settlement route?",
  "Why did reconciliation fail for this pair?",
  "What compliance rules were violated?",
]

const recentQueries = [
  { query: "Why was TXN-2024-8741 routed via IMPS?", timestamp: "2 min ago", model: "Routing-v2", latency: "245ms" },
  { query: "Explain fraud score for vendor-9824", timestamp: "8 min ago", model: "Fraud-RF-v3", latency: "389ms" },
  {
    query: "Why did settlement fail for STL-2024-2847?",
    timestamp: "15 min ago",
    model: "Settlement-v1",
    latency: "156ms",
  },
  { query: "What caused reconciliation exception?", timestamp: "32 min ago", model: "Recon-ML-v2", latency: "421ms" },
]

const savedExplanations = [
  { explanation: "Fraud Detection Model – Velocity Check Algorithm", savedAt: "3h ago", views: 12, usefulness: "95%" },
  { explanation: "Settlement Route Optimization Logic", savedAt: "1d ago", views: 28, usefulness: "87%" },
  { explanation: "3-Way Reconciliation Matching Rules", savedAt: "2d ago", views: 45, usefulness: "92%" },
]

const modelMetadata = [
  { field: "Primary Model", value: "Fraud Detection RF-v3.2" },
  { field: "Ensemble Size", value: "12 sub-models" },
  { field: "Avg Inference Latency", value: "245ms" },
  { field: "Model Accuracy", value: "99.2%" },
  { field: "Last Retraining", value: "2h ago" },
  { field: "Training Data Points", value: "2.8M transactions" },
]

export default function ExplainabilitySection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Explainability</h1>
        <p className="text-muted-foreground mt-1">ML model transparency & decision insights</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Models Tracked" value="8" trend="All active" trendPositive color="blue" />
        <KPICard title="Explainability Rate" value="92.4%" trend="+2.1%" trendPositive color="green" />
        <KPICard title="Feature Importance" value="156" trend="Monitored" trendPositive color="blue" />
        <KPICard title="Avg Latency" value="287ms" trend="-15% vs week" trendPositive color="green" />
      </div>

      {/* AI Assistant Panel */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5" /> AI Explanation Assistant
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ask questions about model decisions and get detailed explanations:
        </p>
        <div className="space-y-2 mb-4">
          {sampleQuestions.map((q, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-all text-sm text-foreground hover:text-blue-400"
            >
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* Explainability Result Card */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Example Explanation Result</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Query</p>
            <p className="text-sm text-foreground">"Why was transaction TXN-2024-8741 routed via IMPS?"</p>
          </div>
          <div className="h-px bg-white/10" />
          <div>
            <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Model Reasoning</p>
            <div className="space-y-2 text-sm text-foreground">
              <p>1. Amount Analysis: ₹5,00,000 falls within optimal IMPS range (₹1-₹10Cr)</p>
              <p>2. Speed Priority: Transaction classified as high-priority (SLA &lt; 2 min)</p>
              <p>3. Cost Optimization: IMPS cost (₹0.50) &lt; RTGS (₹2.50) for time-sensitive txn</p>
              <p>4. Bank Health: HDFC via IMPS has 99.98% uptime vs RTGS 99.2%</p>
              <p>5. Historical Success: 98.8% success rate for similar IMPS routes</p>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Model: Routing-Optimizer-v2.1 | Confidence: 94.2%</span>
            <span className="text-xs text-muted-foreground">Inference: 245ms</span>
          </div>
        </div>
      </div>

      {/* Recent Queries */}
      <DataTable
        title="Recent Explainability Queries"
        columns={[
          { header: "Query", accessor: "query", width: "280px" },
          { header: "Model", accessor: "model", width: "150px" },
          { header: "Latency", accessor: "latency", width: "100px" },
          { header: "Time", accessor: "timestamp", width: "120px" },
        ]}
        data={recentQueries}
      />

      {/* Saved Explanations */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Saved Explanations</h3>
        <div className="space-y-3">
          {savedExplanations.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-3 hover:bg-white/5 rounded-lg transition-colors border border-white/5"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.explanation}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Views: {item.views} | Usefulness: {item.usefulness}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{item.savedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Metadata */}
      <div
        className="rounded-lg border border-white/10 p-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(20,30,60,0.4) 0%, rgba(20,20,40,0.2) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(51, 165, 255, 0.1)",
        }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Model Metadata</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modelMetadata.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 border-b border-white/10">
              <span className="text-sm text-muted-foreground">{item.field}</span>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
