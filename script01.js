//Entrada de dados
let tempCelsius = Number(prompt("Digite a temperatura em Celsius"));

//Validadção de dados
if (Number.isNaN(tempCelsius)) {
  alert("Esse programa espera um número como entrada");
} else {
  //Processamento
  let tempFahrenheit = (tempCelsius * 9) / 5 + 32;
  //Usando Concatenação
  //  alert("Em Celsius: " + tempCelsius + " Em Fahrenheit: " + tempFahrenheit);
  //Usando template de string
  alert(`Em Celsius:   ${tempCelsius} 
  Em Fahrenheit: ${tempFahrenheit}`);
}
