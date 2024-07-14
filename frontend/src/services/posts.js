import axios from "axios";

const url = "http://localhost:3002/api/posts";

const getAll = () => {
  return axios.get(url);
};

const getOne = (id) => {
  return axios.get(`${url}/${id}`);
};

const create = (postObject) => {
  return axios.post(url, postObject);
};

const update = (postObject) => {
  return axios.put(url, postObject);
};

const remove = (id) => {
  return axios.delete(`${url}/${id}`);
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
