
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
var imc = peso / (altura*altura);
mostra (nome + " seu IMC é " + Math.round (imc));

}

var nome = prompt ("Por favor informe seu nome")
var altura = prompt (nome + " informe a sua altura:")
var peso = prompt (nome + " informe o seu peso:")

calculaImc(altura, peso);

</script>
