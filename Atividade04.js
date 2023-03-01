const FaturamentoMensalPorEstado = [
  // Fiz igual o json da questão 3 :)
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "Outros",
    valor: 19849.53,
  },
];
// FTPE = Faturamento Mensal Por Estado
function calculaTotal(FTPE) {
  let total = 0;
  for (var c = 0; c < FTPE.length; c++) {
    total += FTPE[c].valor;
  }
  return total
}

function MostraPercentual(FTPE){
    const array = []
    const total = calculaTotal(FTPE)
    let porcentagem = 0
    for(var c = 0; c < FTPE.length; c++){
        porcentagem = (FTPE[c].valor * 100 / total).toFixed(2) +' %'
        
        array.push({estado:FTPE[c].estado,porcentagem})
    }
    return array
}

console.log(MostraPercentual(FaturamentoMensalPorEstado))
