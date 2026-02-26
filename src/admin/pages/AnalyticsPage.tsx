import React, { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, FileText, FileDown } from "lucide-react";

export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("7d");
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    userGrowth: [] as { date: string; users: number }[],
    bookings: [] as { date: string; bookings: number }[],
    revenueBreakdown: [] as { name: string; value: number }[],
    metrics: {
      totalUsers: 0,
      activeSessions: 0,
      totalBookings: 0,
      revenueMTD: 0,
    },
  });

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/analytics?range=${dateRange}`);
        if (!response.ok) {
          throw new Error("Failed to fetch analytics");
        }
        const data = await response.json();
        setAnalytics(data);
      } catch (error) {
        console.error("Failed to load analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [dateRange]);

  const COLORS = ["#10b981", "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1", "#f59e0b"];

  const userGrowthData = useMemo(
    () =>
      analytics.userGrowth.map((item) => ({
        date: new Date(item.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        users: item.users,
      })),
    [analytics.userGrowth]
  );

  const bookingsData = useMemo(
    () =>
      analytics.bookings.map((item) => ({
        day: new Date(item.date).toLocaleDateString("en-US", { weekday: "short" }),
        bookings: item.bookings,
      })),
    [analytics.bookings]
  );

  const revenueData = useMemo(
    () =>
      analytics.revenueBreakdown.map((item, index) => ({
        ...item,
        color: COLORS[index % COLORS.length],
      })),
    [analytics.revenueBreakdown]
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Analytics & Insights</h1>
          <p className="text-gray-700">Track platform performance and user engagement</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px] bg-white border-emerald-200 text-black">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="bg-white border-emerald-200 text-black hover:bg-emerald-50"
          >
            <Download className="mr-2 w-4 h-4" />
            Export CSV
          </Button>
          <Button
            variant="outline"
            className="bg-white border-emerald-200 text-black hover:bg-emerald-50"
          >
            <FileText className="mr-2 w-4 h-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {loading && (
        <Card className="bg-white border-emerald-200 p-6">
          <p className="text-gray-700">Loading analytics...</p>
        </Card>
      )}

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Line Chart */}
        <Card className="bg-white border-emerald-200 p-6">
          <h2 className="text-xl font-bold text-black mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#10b98140" />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #10b981",
                  borderRadius: "4px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#10b981"
                strokeWidth={2}
                name="Total Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Requests Per Day Bar Chart */}
        <Card className="bg-white border-emerald-200 p-6">
          <h2 className="text-xl font-bold text-black mb-4">Marketplace Requests Per Day</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#10b98140" />
              <XAxis
                dataKey="day"
                stroke="#6b7280"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #10b981",
                  borderRadius: "4px",
                }}
              />
              <Legend />
              <Bar dataKey="bookings" fill="#14b8a6" name="Requests" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue Breakdown Pie Chart */}
        <Card className="bg-white border-emerald-200 p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-black mb-4">Revenue Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #10b981",
                    borderRadius: "4px",
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4 flex flex-col justify-center">
              {revenueData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-black font-medium">{item.name}</span>
                  </div>
                  <span className="text-black font-bold">
                    ₹{item.value.toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="pt-4 border-t border-emerald-200">
                <div className="flex items-center justify-between">
                  <span className="text-black font-bold text-lg">Total Revenue</span>
                  <span className="text-emerald-600 font-bold text-xl">
                    ₹{revenueData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Users",
            value: analytics.metrics.totalUsers.toLocaleString(),
            change: "",
          },
          {
            label: "Active Sessions",
            value: analytics.metrics.activeSessions.toLocaleString(),
            change: "",
          },
          {
            label: "Total Requests",
            value: analytics.metrics.totalBookings.toLocaleString(),
            change: "",
          },
          {
            label: "Revenue (MTD)",
            value: `₹${analytics.metrics.revenueMTD.toLocaleString()}`,
            change: "",
          },
        ].map((metric, index) => (
          <Card
            key={index}
            className="bg-white border-emerald-200 p-6"
          >
            <p className="text-gray-700 text-sm mb-2">{metric.label}</p>
            <p className="text-black text-2xl font-bold mb-1">{metric.value}</p>
            {metric.change && (
              <p className="text-emerald-600 text-sm font-semibold">{metric.change}</p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}


