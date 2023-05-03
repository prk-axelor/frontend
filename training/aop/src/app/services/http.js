import axios from "axios";

const rest = axios.create({
  baseURL: "/open-platform-demo",
  headers: {
    Authorization: "Basic YWRtaW46YWRtaW4=",
    //"X-CSRF-Token": "f5976e7b19324ac7bc76bf8fdc37ecd1",
  },
});

export { rest };
