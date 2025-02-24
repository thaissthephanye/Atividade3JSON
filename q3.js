//Como converter um JSON para string?

//É possível converter um objeto JSON em uma string através da função JSON.stringify

function executarCodigo() {
  const objeto = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
  };
  const jsonString = JSON.stringify(objeto);

  return jsonString;
}

document.getElementById("quest3").addEventListener("click", function () {
  const resultado = executarCodigo();

  document.getElementById("resultado").textContent = resultado;
});
