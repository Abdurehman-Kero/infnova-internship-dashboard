import { useEffect, useState } from "react";

import StatsCard from "../../components/dashboard/StatsCard";

import { dashboardService } from "../../services/dashboard.service";

import type { DashboardStats } from "../../types/dashboard.types";

function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const fetchStats = async () => {
    try {
      setLoading(true);

      setError("");

      const data = await dashboardService.getSummary();

      setStats(data);
    } catch (error) {
      setError("Failed to load dashboard statistics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div
        className="
        space-y-6
        "
      >
        <div
          className="
          h-8
          w-56
          animate-pulse
          rounded
          bg-slate-200
          "
        />

        <div
          className="
          grid
          gap-4

          sm:grid-cols-2

          lg:grid-cols-4
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}

              className="
                h-32
                animate-pulse
                rounded-xl
                bg-slate-200
                "
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        rounded-xl
        bg-red-50
        p-5
        text-red-700
        "
      >
        <p
          className="
          mb-3
          font-medium
          "
        >
          {error}
        </p>

        <button
          onClick={fetchStats}

          className="
          rounded-lg
          bg-red-600
          px-4
          py-2
          text-sm
          text-white
          hover:bg-red-700
          "
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      className="
      space-y-6

      p-1

      sm:p-2
      "
    >
      <div>
        <h1
          className="
          text-2xl
          font-bold
          text-slate-800

          sm:text-3xl
          "
        >
          Dashboard Overview
        </h1>

        <p
          className="
          mt-1
          text-sm
          text-slate-500
          "
        >
          Monitor internship applications and status overview.
        </p>
      </div>

      <div
        className="
        grid
        gap-4

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
