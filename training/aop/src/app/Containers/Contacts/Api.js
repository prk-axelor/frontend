import { rest } from "../../services/http";

const model = "com.axelor.contact.db.Contact";

const getContacts = () => {
  return rest
    .post(`/ws/rest/${model}/search`, {})
    .then(({ data }) => data?.data);
};
const deleteContact = (records) => {
  return rest
    .post(`ws/rest/${model}/removeAll`, { records })
    .then(({ data }) => data?.data);
};

const addContact = (data) => {
  return rest
    .post(`/ws/rest/${model}`, {
      data,
    })
    .then((data) => data?.data);
};
const getContact = (id) => {
  return rest
    .post(`/ws/rest/${model}/${id}/fetch`, {})
    .then(({ data }) => data?.data[0]);
};
const updateContact = (id, data) => {
  rest.post(`ws/rest/${model}`, { id, data }).then(({ data }) => data?.data);
};

const api = {
  getContacts,
  deleteContact,
  addContact,
  getContact,
  updateContact,
};
export { api };
