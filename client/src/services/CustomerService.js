import axios from "./Axios";

const fetchAllCustomers = (page) => {
  return axios.get("/api/users?page=" + page);
};

export { fetchAllCustomers };
