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

export { postSignUp, postSignIn, getRanking };
