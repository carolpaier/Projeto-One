<meta charset="UTF-8">

<title>Cálculo IMC</title>

<b>Tabela IMC <b> 

<br> <br> <br>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/kB55x59/tabela.png" alt="tabela" border="0"></a>

<br> <br> <br>

<script>

function pulaLinha ( ) {
document.write("<br>");
document.write("<br>");
}

function mostra(frase) {
document.write(frase);
pulaLinha ( );
}

function calculaImc(altura, peso) {
return peso / (altura *altura);

}

var nome = prompt ("Por favor informe seu nome")
var alturaInformada = prompt (nome + " informe a sua altura:")
var pesoInformado = prompt (nome + " informe o seu peso:")
var imc = calculaImc(alturaInformada, pesoInformado);

mostra (nome + " seu IMC é " + Math.round (imc));

if(imc < 18.5) {
mostra(nome + " você está abaixo do peso ideal");
}

if(imc >= 18.5 && imc <= 24.9) {
mostra(nome + " você está com peso normal");
}

if (imc >= 25 && imc <= 29.9) {
mostra(nome + " você está com sobrepeso");
}

if (imc >= 30) {
mostra(nome + " você está com obesidade");
}

</script>
