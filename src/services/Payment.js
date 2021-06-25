import axios from "axios";

export const instance = axios.create({
  baseURL: "http://us-central1-diogobasso-site.cloudfunctions.net/payment",
});
