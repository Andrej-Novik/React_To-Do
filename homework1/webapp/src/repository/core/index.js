import * as axios from "axios";

class Core {
  getUsers = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get("/api/users");
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
      const response = await axios.delete(`/api/users/${userId}`);
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
      const response = await axios.post(`/api/users/`, {
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
      const response = await axios.patch(`/api/users/${userId}`, {
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
      const response = await axios.get(`/api/users/`, userId);
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}
export default new Core();
