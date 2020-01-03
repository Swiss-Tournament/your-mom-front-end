import axios from "axios";

export function getUserToken() {
  return localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "https://your-mama.com/api",
    header: {
      Authorization: getUserToken()
    }
  });
}
