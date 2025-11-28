"use client"

import { useState } from "react"
import { Menu, Search, Bell, Moon, Sun, ChevronDown, Calendar } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [theme, setTheme] = useState("dark")
  const [environment, setEnvironment] = useState("sandbox")
  const [dateRange, setDateRange] = useState("today")

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4 gap-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-accent/20 rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          {/* Platform Switcher */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="text-sm font-semibold text-foreground">Arealis Magnus</div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Environment Tags */}
          <div className="flex gap-2">
            {["Sandbox", "Production"].map((env) => (
              <button
                key={env}
                onClick={() => setEnvironment(env.toLowerCase())}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  environment === env.toLowerCase()
                    ? "bg-neon-blue/30 border border-neon-blue text-neon-cyan"
                    : "bg-accent/20 border border-accent text-muted-foreground hover:bg-accent/30"
                }`}
              >
                {env}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Section - Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search Trace ID, UTR, Amount..."
              className="w-full bg-accent/20 border border-accent rounded-lg pl-9 pr-4 py-2 text-sm placeholder-muted-foreground text-foreground focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Date Filter */}
          <div className="hidden md:flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-accent/20 border border-accent rounded-lg px-3 py-1.5 text-sm text-foreground cursor-pointer focus:outline-none focus:border-neon-blue transition-all"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-accent/20 rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </button>

          {/* User Avatar */}
          <button className="w-9 h-9 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center text-foreground font-semibold text-sm hover:shadow-lg transition-all glow-cyan">
            RM
          </button>
        </div>
      </div>
    </header>
  )
}
