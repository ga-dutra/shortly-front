import axios from "axios";

const base_url = "https://shortly-back-driven.herokuapp.com";

function postSignUp(body) {
  const promise = axios.post(`${base_url}/auth/signup`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${base_url}/auth/signin`, body);
  return promise;
}

function getRanking() {
  const promise = axios.get(`${base_url}/ranking`);
  return promise;
}

function getUserData(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const promise = axios.get(`${base_url}/auth/users/me`, config);
  return promise;
}

function postShortLink(token, url) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = { url: url };
  const promise = axios.post(`${base_url}/urls/shorten`, body, config);
  return promise;
}

function deleteLink(token, linkId) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const promise = axios.delete(`${base_url}/urls/${linkId}`, config);
  return promise;
}

function redirectUser(linkId) {
  const promise = axios.get(`${base_url}/urls/open/${linkId}`);
  return promise;
}

export {
  postSignUp,
  postSignIn,
  getRanking,
  getUserData,
  postShortLink,
  deleteLink,
  redirectUser,
};
