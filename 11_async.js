//const {sleep} = require("../exercices/10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (cb) => {
  const { sleep } = require("./10_promise");
  console.log(1);
  sleep(2000).then(synchFonction());
  console.log(2)
  function synchFonction() {
    console.log(3)
    return cb;
  }
}

//usingThen(2000);

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (cb) => {
  const { sleep } = require("./10_promise");
  console.log("start");
  await sleep(2000);
  console.log("end");
  cb();
}

//usingAwait();

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async (url) => {
  let res = axios.get(url);
  return (await res.data);
}

apiResponse("https://jsonplaceholder.typicode.com/todos/1");

module.exports = { usingThen, usingAwait, apiResponse };