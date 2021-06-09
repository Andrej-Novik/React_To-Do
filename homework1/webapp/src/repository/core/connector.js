import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create();
    this.connector.interceptors.request.use((config) => {
      const newConfig = { ...config };
      const token = localStorage.getItem("accessToken");
      if (token) {
        newConfig.headers["Authorization"] = "Bearer " + token;
      }
      return newConfig;
    });
  }
}

export default new Connector();
