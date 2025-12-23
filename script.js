function formatarAltura(input) {
  let valor = input.value.replace(/\D/g, "");

  if (valor.length >= 3) {
    valor = valor[0] + "." + valor.slice(1, 3);
  }

  input.value = valor;
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (
    !peso ||
    !altura ||
    altura < 1 ||
    altura > 2.5 ||
    peso < 20 ||
    peso > 300
  ) {
    resultado.innerText = "Valores inválidos.";
    resultado.className = "vermelho";
    return;
  }

  const imc = peso / (altura * altura);
  const min = 18.5 * altura * altura;
  const max = 24.9 * altura * altura;

  let classe = "";
  let cor = "";

  if (imc < 18.5) {
    classe = "Abaixo do peso";
    cor = "amarelo";
  } else if (imc < 24.9) {
    classe = "Peso normal";
    cor = "verde";
  } else if (imc < 29.9) {
    classe = "Sobrepeso";
    cor = "amarelo";
  } else {
    classe = "Obesidade";
    cor = "vermelho";
  }

  resultado.className = cor;
  resultado.innerHTML = `
      <strong>IMC:</strong> ${imc.toFixed(2)} (${classe})<br>
      <strong>Peso ideal:</strong> ${min.toFixed(1)} kg – ${max.toFixed(
    1
  )} kg<br>
      ${
        peso > max
          ? `<strong>Excesso de peso:</strong> ${(peso - max).toFixed(1)} kg`
          : "Você está dentro do peso ideal"
      }
    `;
}

function limpar() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").className = "";
}
