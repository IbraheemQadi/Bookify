import APIClient from "./apiClient";

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  userType: string;
}

export default new APIClient<AuthRequest, AuthResponse>("/api/auth/login");
