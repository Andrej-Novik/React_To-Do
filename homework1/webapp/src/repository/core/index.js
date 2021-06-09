import * as axios from "axios";
import Connector from "./connector"

class Core {
  getUsers = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("/api/users");
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  deleteUser = async (userId) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.delete(`/api/users/${userId}`);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  createUser = async (firstName, lastName) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post(`/api/users/`, {
        firstName,
        lastName,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  updateUser = async (userId, firstName, lastName) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.patch(`/api/users/${userId}`, {
        firstName,
        lastName,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };

  getUser = async (userId) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`/api/users/`, userId);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
  login = async (email, password) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post(`/api/auth/login`, {
        email,
        password,
      });
      result.value = response.data;
    } catch (e) {
      result.error = e.response.data;
    }
    return result;
	};
	refresh = async (refreshToken) => {
		const result = {
			value: null,
			error: null,
		};
		try {
			const response = await Connector.connector.post(`/api/auth/refresh`, {
				refreshToken
			});
			result.value = response.data;
		} catch (e) {
			result.error = e.response.data;
		}
		return result;
	}
}
export default new Core();
