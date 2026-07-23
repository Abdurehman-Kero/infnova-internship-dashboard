import api from "../api/axios";

import type {
  ApplicantResponse,
  ApplicantQueryParams,
  Applicant,
} from "../types/applicant.types";

export const applicantService = {
  async getApplicants(
    params: ApplicantQueryParams,
  ): Promise<ApplicantResponse> {
    const response = await api.get<ApplicantResponse>("/applicants", {
      params,
    });

    return response.data;
  },

  async getApplicantById(id: string): Promise<Applicant> {
    const response = await api.get<Applicant>(`/applicants/${id}`);

    return response.data;
  },

  async updateStatus(id: string, status: string) {
    const response = await api.patch(`/applicants/${id}/status`, {
      status,
    });

    return response.data;
  },
};
