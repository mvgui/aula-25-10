//Entrada de dados
let lado = Number(prompt("Digite o tamanho do lado do quadrado:"));

//Processamento de dados
if (Number.isNaN(lado)) {
  //Saída de dados
  alert("O programa espera um número como entrada.");
} else {
  let area = Math.pow(lado, 2);
  //Saída de dados
  alert("A área do quadrado é " + area);
  console.log(area);
}
//console.log(area);
//a variável aqui não funciona porque ela é zerada após a finalização do bloco {}
