import axios from "axios";

const rest = axios.create({
  baseURL: "/open-platform-demo",
  auth: { username: "admin", password: "admin" },
});

export { rest };
