import axios from "axios";

export const getContacts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/contacts`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createContact = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:3000/contacts`, payload)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const removeContact = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:3000/contacts/${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
