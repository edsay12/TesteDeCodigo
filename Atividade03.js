const data = require("./dados/dados.json");

// Preferi não usar um função pronta.Como exemplo o math.min
function retornMenorValor(data) {
  let menor = data[0].valor;

  for (var c = 0; c < data.length; c++) {
    if (data[c].valor < menor) {
      menor = data[c].valor;
    }
  }

  return `Menor valor : ${menor.toFixed(2)}`;
}

function retornMaiorValor(data) {
  let maior = data[0].valor;

  for (var c = 0; c < data.length; c++) {
    if (data[c].valor > maior) {
      maior = data[c].valor;
    }
  }
  return `Maior Valor : ${maior.toFixed(2)}`;
}

function numeroDeDiasSuperiorMediaMes(data) {
  let array = []; // um array de controle
  let total = 0
  let media = 0
  for (var c = 0; c < data.length; c++) {
    if (!data[c].valor <= 0) {
      array.push(data[c]);
      total += data[c].valor
    }
  }
  // pego o novo array e calculo a media
  media = total / array.length
  return `Media : ${media.toFixed(2)}`
}
console.log(retornMenorValor(data));
console.log(retornMaiorValor(data));
console.log(numeroDeDiasSuperiorMediaMes(data))
