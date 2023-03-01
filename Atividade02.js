// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos
// 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem
// que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem
// avisando se o número informado pertence ou não a sequência.

// definindo as variaves necessarias


// funçao que calcula qual elemento esta em certa posiçao da sequencia
function fibonacci(n) {

  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Essa funçao pecorre os elementos
function verificaFibonacci(num){
    for(var c = 0; c <= num; c++){ // Aqui eu fiz um for que vai rodar num vezes 
        if(fibonacci(c) === num){ // apos isso eu comparo se o valo
            return `o numero: ${num} pertençe a sequencia`
        }
    }
    return `o numero ${num} não pertence a sequencia`
}

console.log(verificaFibonacci(13))