import api from "../api/axios";
import {  type LoginRequest, type LoginResponse } from "../types/auth.types";

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", credentials);

    return response.data;
  },
};
