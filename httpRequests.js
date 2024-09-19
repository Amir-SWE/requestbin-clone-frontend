import axios from "axios";

const MAIN_URL = "http://localhost:3001";

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
  //delete/:eventId
  const url = `${MAIN_URL}/delete/${eventId}`;
  const request = axios.delete(url);
  return request.then((response) => response.data);
};

export { create, getAllEvents, deleteEvent };
