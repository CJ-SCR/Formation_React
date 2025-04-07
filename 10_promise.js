
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

console.log(1);
sleep(2000);
console.log(2);
module.exports = { sleep };