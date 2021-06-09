import Repository from "../../repository";
import { ERROR_AUTH, SET_TOKEN, DELETE_TOKEN } from "../actionTypes/login";

export function setToken(value) {
  return { type: SET_TOKEN, value };
}

export const initApp = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    dispatch(refresh());
  }
};
export const refreshTokenTimeout = () => async (dispatch) => {
  setTimeout(() => dispatch(refresh()), 1 * 60 * 60 * 1000 - 59 * 60 * 1000);
};

export function deleteToken() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  return { type: DELETE_TOKEN };
}
export function setError(error) {
  return { type: ERROR_AUTH, error };
}

export const login = (email, password) => async (dispatch) => {
  const { value, error } = await Repository.APICore.login(email, password);
  if (!value || error) {
    dispatch(setError(error));
    return;
  }
  dispatch(setToken(value.accessToken));
  localStorage.setItem("accessToken", value.accessToken);
  localStorage.setItem("refreshToken", value.refreshToken);
  dispatch(refreshTokenTimeout());
};

export const refresh = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("refreshToken");
  const { value, error } = await Repository.APICore.refresh(refreshToken);
  dispatch(setToken(value.accessToken));
  localStorage.setItem("accessToken", value.accessToken);
  localStorage.setItem("refreshToken", value.refreshToken);
  dispatch(refreshTokenTimeout());
};
