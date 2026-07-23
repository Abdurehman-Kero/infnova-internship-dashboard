import api from "../api/axios";

import type { DashboardStats } from "../types/dashboard.types";

export const dashboardService = {
  async getSummary(): Promise<DashboardStats> {
    const response = await api.get<DashboardStats>("/dashboard/summary");

    return response.data;
  },
};
