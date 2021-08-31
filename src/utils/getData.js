import getHash from "./getHash";

const API = "https://rickandmortyapi.com/api/character/"

ID = getHash();

const apiURL = `${API}${ID}`;

console.log(apiURL);