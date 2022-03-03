import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";



// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization =  token;

//   return config;
// });



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  
  baseURL: BASE_URL
  
});

userRequest.defaults.headers.common['token'] = "Bearer "+ localStorage.getItem("token");
