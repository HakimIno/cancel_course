import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IRefreshToken } from "../contexts/JWTContext";
// ------------------------------------------------------------------------------
export interface IAxResponse<I> {
  message: string;
  result: I;
}
// config
const http = axios.create({
  baseURL: import.meta.env.APP_API_ENDPOINT,
});
let isRefreshing = false;
const refreshSubscribers: ((token: string) => void)[] = [];

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry: boolean;
    };
    if (error.response?.status === 401) {
      if (isRefreshing === false) {
        isRefreshing = true;
        const { data } = await http.post<IAxResponse<IRefreshToken>>(
          "/renew-token"
        );
        isRefreshing = false;
        onRrefreshed(data.result.access_token);
      }
      const retryOrigReq = new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers = { Authorization: "Bearer " + token };
          resolve(axios(originalRequest));
        });
      });
      return retryOrigReq;
    }
    return Promise.reject(error);
  }
);

function subscribeTokenRefresh(cb: (token: string) => void) {
  refreshSubscribers.push(cb);
}
function onRrefreshed(token: string) {
  refreshSubscribers.map((cb) => cb(token));
}

export default http;
