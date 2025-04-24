import axios from "axios";
import API_BASE_URL from "../config/config";
import API_KEY from "../config/config";

export const LoginService = (username, password) => {
  return axios
    .post(
      `${API_BASE_URL}/api/auth/localr`,
      { username: username, password: password },
      {
        headers: {
          x_api_key: API_KEY,
        },
      }
    )
    .then((res) => {
      console.log("Login successfull");
    });
};

export const SignupService = (email, username, password) => {
  return axios
    .post(
      `${API_BASE_URL}/api/auth/local/register`,
      { email: email, username: username, password: password },
      {
        headers: {
          x_api_key: API_KEY,
        },
      }
    )
    .then((res) => {
      console.log("Signup successfull");
    });
};
