import jwtDecode from "jwt-decode";
// routes
import { PATH_AUTH } from "../routes/paths";
//
import axios from "./axios";

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken) as any;

  const currentTime = Date.now() / 1000;

  return decoded && decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert("Token expired");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  }, timeLeft);
};

const setSession = (
  accessToken: string | null,
  refreshToken: string | null
) => {
  if (accessToken && refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode<{ exp: number }>(refreshToken); // ~5 days by minimals server
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
