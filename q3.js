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

// Adiciona o evento de clique ao botão
document.getElementById("quest3").addEventListener("click", function () {
  // Executa o código e captura o resultado
  const resultado = executarCodigo();

  // Exibe o resultado no elemento <pre>
  document.getElementById("resultado").textContent = resultado;
});
