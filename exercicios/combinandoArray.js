//Combinando e cortando arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

//combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);
//Dividir
const cortado = combinado.slice(1,3);
console.log(cortado);
