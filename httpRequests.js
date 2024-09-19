import axios from "axios";

const MAIN_URL = import.meta.env.VITE_BACKEND_URL

const getAllEvents = (bin_key) => {
  const url = `${MAIN_URL}/view/${bin_key}`;

  try {
    const res = axios.get(url);
    return res.then((res) => res.data);
  } catch (err) {
    throw err;
  }
};

const create = () => {
  const request = axios.get(`${MAIN_URL}/create`);
  return request.then((response) => response.data);
};

const deleteEvent = (eventId) => {
  const url = `${MAIN_URL}/delete/${eventId}`;
  const request = axios.delete(url);
  return request.then((response) => response.data);
};

const testRequests = (bin_key) => {
  const url = `${MAIN_URL}/${bin_key}`;

  const get = axios.get(url + "/sample/get");
  const post = axios.post(url + "/sample/post", { "epochtime": Date.now() });
}

export { create, getAllEvents, deleteEvent, testRequests };
