/*
//Entrada de dados
let altura = Number(prompt("Digite a altura do retângulo"));
let largura = Number(prompt("Digite a largura do retângulo"));

//Validação - && operador lógico de adição
if (Number.isInteger(altura) && Number.isInteger(largura)) {
  let area = altura * largura;
  alert(`A área do retângulo é ${area}`);
} else {
  alert("Esse programa espera 2 números inteiros.");
}
*/
/* outro jeito se estivesse dentro de uma função - ! operador lógico de negação
let altura = Number(prompt("Digite a altura do retângulo"));
if(!Number.isInteger(altura)) {
    alert("Esse programa espera números inteiros.");
    return;
}
let largura = Number(prompt("Digite a largura do retângulo"));
if(!Number.isInteger(altura)) {
    alert("Esse programa espera números inteiros.");
    return;
}
*/
function calculaArea() {
  //Entrada
  let altura = Number(prompt("Digite a altura do retângulo"));
  if (!Number.isInteger(altura)) {
    alert("Esse programa espera números inteiros.");
    return;
  }
  let largura = Number(prompt("Digite a largura do retângulo"));
  if (!Number.isInteger(altura)) {
    alert("Esse programa espera números inteiros.");
    return;
  }
  //Processamento
  let area = altura * largura;
  alert(`A área do retângulo é ${area}`);
}

calculaArea();
