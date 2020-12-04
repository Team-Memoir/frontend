import axios from "./axios";

/**
 * Login to website with email and passwor
 * @param {string} email user's email
 * @param {string} password user's password
 */
export function login(email: string, password: string) {
  return axios.post("/auth/login", { email, password });
}

/**
 * Register an account with email and password
 * @param {string} email user's email
 * @param {string} password user's password
 */
export function register(email: string, password: string) {
  return axios.post("/auth/registerl", { email, password });
}
