export type ApplicantStatus =
  "pending" | "shortlisted" | "accepted" | "rejected";

export type ApplicantTrack =
  "frontend" | "backend" | "ui-ux" | "data-analytics" | "mobile";

export interface Applicant {
  id: string;

  fullName: string;

  email: string;

  country: string;

  track: string;

  status: string;

  applicationDate: string;

  phone?: string;

  experienceLevel?: string;

  portfolioUrl?: string;

  githubUrl?: string;
}
export interface ApplicantMeta {
  page: number;

  limit: number;

  total: number;

  totalPages: number;
}

export interface ApplicantResponse {
  data: Applicant[];

  meta: ApplicantMeta;
}

export interface ApplicantQueryParams {
  page?: number;

  limit?: number;

  search?: string;

  status?: ApplicantStatus;

  track?: ApplicantTrack;

  sortBy?: string;

  sortOrder?: "asc" | "desc";
}
