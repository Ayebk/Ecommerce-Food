import axios from "axios";

const BASE_URL = "//https://ecommerce-food-heroku.herokuapp.com/";  http://localhost:5000/api/

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.defaults.headers.common["token"] =
  "Bearer " + localStorage.getItem("token");
