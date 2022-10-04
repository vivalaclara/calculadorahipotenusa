var calcule = document.getElementById("botao"); //aqui temos o botão conectado ao HTML

function calcular() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var resultado = document.getElementById("resultado"); //as variáveis necessárias para calcular

  if (a !== "" && b) {
    const somaCatetos = a ** 2 + b ** 2;
    const hipotenusa = Math.sqrt(somaCatetos).toFixed(2); //valor toFixed para duas casas decimais para caso do resultado não ser inteiro
    //se não inseridos valores vazios, o cálculo será feito e esse cálculo é constante, não sofre alterações

    resultado.textContent = hipotenusa;
  } else {
    resultado.textContent = "necessário número (╬ಠิ益ಠิ)"; //mensagem de para se não for inserido um valor
  }
}

calcule.addEventListener("click", calcular); //para o resultado aparecer na tela