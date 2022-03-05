import axios from "axios";

const BASE_URL = "https://ecommerce-food-production.herokuapp.com/api/"; 
// const BASE_URL = "http://localhost:5000/api/"; 


// const BASE_URL = process.env.NODE_ENV === "production"
//     ? "https://ecommerce-food-production.herokuapp.com/api/"
//     : "http://localhost:5000/api/";


console.log(BASE_URL)
  
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.defaults.headers.common["token"] =
  "Bearer " + localStorage.getItem("token");
