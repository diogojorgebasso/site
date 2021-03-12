import axios from "axios";

const frase = axios.create({
  baseURL: "http://api.quotable.io/random",
});

function nameAge(name) {
  return axios.create({
    baseURL: `https://api.agify.io/?name=${name}`,
  });
}
const mercadoFin = axios.create({
  baseURL: "https://mercadobitcoin.net/api/BTC/trades",
});

export { frase, nameAge, mercadoFin };
