import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerking-54612.firebaseio.com/"
});

export default instance;
