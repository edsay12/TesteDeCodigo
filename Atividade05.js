let input = "sou uma linda string";

function inverteString(string) {
  let array1 = []; // criei um array onde sera guardado todos os elemento da string
  let stringInvertida = ""; // variavel que guardara os elementos ja invertidos
  // pego cada item da string e coloco num array
  for (item of input) {
    array1.push(item);
  }
  for (var c = array1.length - 1; c >= 0; c--) {
    stringInvertida +=array1[c] // aqui eu junto tudo ja invertido
  }
  return stringInvertida;
}

console.log(inverteString(input))

// nesse exercicio eu poderia ultilizar o : join,split,reverse.
