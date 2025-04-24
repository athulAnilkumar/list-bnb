import axios from "axios";
import API_BASE_URL from "../config/config";
import API_KEY from "../config/config";

export const CreateAdService = (params) => {
  return axios
    .post(
      `${API_BASE_URL}/api/advertisements`,
      { ...params },
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("Ad creation successfull");
    });
};

export const GetAdListService = (params) => {
  return axios
    .get(
      `${API_BASE_URL}/api/advertisements`,
      {},
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("get ad list successfull");
      return res;
    });
};

export const GetAdDetailsService = (params) => {
  return axios
    .get(
      `${API_BASE_URL}/api/advertisements/:id`,
      {},
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("get ad details successfull");
      return res;
    });
};

export const GetUserProfileService = (params) => {
  return axios
    .get(
      `${API_BASE_URL}/api/profile`,
      {},
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("get user profile successfull");
      return res;
    });
};

export const UpdateUserProfileService = (params) => {
  return axios
    .put(
      `${API_BASE_URL}/api/profile`,
      {},
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("Update user profile successfull");
    });
};

export const DeleteAdService = (params) => {
  return axios
    .delete(
      `${API_BASE_URL}/api/advertisements/:id`,
      {},
      {
        headers: {
          token: localStorage.getItem("token") || "",
        },
      }
    )
    .then((res) => {
      console.log("Delete user profile successfull");
    });
};
