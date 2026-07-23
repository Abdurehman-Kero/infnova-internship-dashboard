import { useEffect, useState } from "react";

import StatsCard from "../../components/dashboard/StatsCard";

import { dashboardService } from "../../services/dashboard.service";

import type { DashboardStats } from "../../types/dashboard.types";

function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await dashboardService.getSummary();

        setStats(data);
      } catch (error) {
        setError("Failed to load dashboard statistics.");
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading statistics...</div>;
  }

  if (error) {
    return (
      <div
        className="
        rounded-lg
        bg-red-50
        p-4
        text-red-700
        "
      >
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1
        className="
        mb-6
        text-3xl
        font-bold
        text-slate-800
        "
      >
        Dashboard Overview
      </h1>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >
        <StatsCard
          title="Total Applicants"

          value={stats?.totalApplicants ?? 0}
        />

        <StatsCard
          title="Pending"

          value={stats?.byStatus?.pending ?? 0}
        />

        <StatsCard
          title="Accepted"

          value={stats?.byStatus?.accepted ?? 0}
        />
        <StatsCard
          title="Rejected"

          value={stats?.byStatus?.rejected ?? 0}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
