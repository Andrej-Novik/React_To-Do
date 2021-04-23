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
}
export default new Core();
