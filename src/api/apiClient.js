import axios from "axios";
import { store } from "../store/Store";
import { logOut } from "../features/authslice";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;

let baseUrl = "https://onemapcitizens.gmda.gov.in/";

// if (ENVIRONMENT === "DEV") {
//   baseUrl = "http://172.16.2.55:5001/";
// } else if (ENVIRONMENT === "STAGING") {
//   baseUrl = "https://onemapcitizens.gmda.gov.in/api_gis_st/";
// } else if (ENVIRONMENT === "PROD") {
//   baseUrl = "http://103.122.27.15/API/";
// }

const apiClient = axios.create({
  baseURL: baseUrl,
});

/* ---------------------- RESPONSE INTERCEPTOR ---------------------- */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  }
);

export default apiClient;
