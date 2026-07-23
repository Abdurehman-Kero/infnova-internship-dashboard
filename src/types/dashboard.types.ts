export interface DashboardStats {
  totalApplicants: number;

  byStatus: {
    [key: string]: number;
  };

  byTrack: {
    [key: string]: number;
  };
}
