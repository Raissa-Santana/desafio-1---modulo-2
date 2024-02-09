//14 - Utilize um método para adicionar no meio deste array.
//let nome = ["João",  "Maria",  "Jose",  "Pedro"]

// Array inicial
let grup1 = ["João", "Maria", "Jose", "Pedro"];

let posicao = Math.floor(grup1.length / 2);
grup1.splice(posicao, 0, "Ana");

console.log(grup1);
