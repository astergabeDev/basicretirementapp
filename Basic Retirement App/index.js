//Programa para calcular a aposentadoria de uma pessoa.

 const nome = 'YourName'
 const sexo = 'Your sex (M or F)'
 const idade = YourAge in numbers
 const contribuicao = YourContribution in numbers

 const aposentadoria = idade + contribuicao
 //O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
if (sexo == "F") {
  if (aposentadoria >= 85){
    console.log(`${nome}, você está aposentada.`)
  } else {
    console.log(`${nome}, você não está aposentada.`)
  }
} else {
  if (aposentadoria >= 95) {
    console.log(`${nome}, você está aposentado.`)
  } else {
    console.log(`${nome}, você não está aposentado.`)
  }
}
