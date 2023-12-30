import { api } from "../index";

export function getCurrentUser() {
  return api.get("/auth/current-user");
}

export function loginRequest(data) {
  return api.post("/auth/login", data);
}

export function verifyOtpRequest(data) {
  return api.post("/auth/verify-otp", data);
}

export function resendOtpRequest(data) {
  return api.get("/auth/resend-otp", data);
}
