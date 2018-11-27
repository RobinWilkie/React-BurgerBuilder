import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-8ea7e.firebaseio.com/"
});

export default instance;
