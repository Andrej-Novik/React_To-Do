import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UsersRepository from "../../repository/database/users";

class AuthService {
  login = async (email, password) => {
    const result = {
      value: null,
      error: null,
    };

    const { value, error } = await UsersRepository.getUserByFirstName(email);

    if (!value || error) {
      result.error = "User not found";
      return result;
    }

    const isPassValid = password === value.lastName;
    if (!isPassValid) {
      result.error = "Invalid password";
      return result;
    }

    const accessToken = jwt.sign({ id: value.id }, "tokenSecret", {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ id: value.id }, "tokenSecret", {
      expiresIn: "3d",
    });

    result.value = { accessToken, refreshToken };

    return result;
  };

  refresh = async (lastRefreshToken: string) => {
    const result = {
      value: null,
      error: null,
    };

    const isValid = jwt.verify(lastRefreshToken, "tokenSecret");

    if (!isValid) {
      result.error = "incorred token";
      return result;
    }
    const userId = jwt.decode(lastRefreshToken).id;

    const accessToken = jwt.sign({ id: userId }, "tokenSecret", {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ id: userId }, "tokenSecret", {
      expiresIn: "3d",
    });

    result.value = { accessToken, refreshToken };

    return result;
  };

  validateUser = async (auth) => {
    const result = {
      value: null,
      error: null,
    };

    if (!auth) {
      result.error = "Auth error";
      return result;
    }
    const token = auth.split(" ")[1];
    if (!token) {
      result.error = "Auth error";
      return result;
    }
    const decoded = jwt.verify(token, "tokenSecret");

    result.value = decoded?.id;

    return result;
  };
}
export default new AuthService();
