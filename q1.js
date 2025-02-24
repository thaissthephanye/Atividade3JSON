// Quais são as regras de construção de um JSON?

//JSON é um texto organizado em pares de chave e valor
//Os pares chave e valor devem ser separados por vírgulas
//O JSON não pode ter comentários dentro dele
//Para os valores devem ser utilizadas aspas duplas, com aspas simples não funciona
//Não pode ter funções dentro do JSON

const dadosJSON = {
  nome: "Thais",
  idade: 21,
  ativo: true,
  endereco: {
    rua: "Rua Tal",
    numero: 111,
    cidade: "Solânea",
  },
  telefones: ["83 99999-4321", "83 1234-5678"],
  notas: [7.5, 8.0, 9.1],
};

document.getElementById("quest1").addEventListener("click", function () {
  // Converte o JSON para uma string formatada
  const jsonFormatado = JSON.stringify(dadosJSON, null, 2);
  // Exibe o JSON no elemento <pre>
  document.getElementById("resultado1").textContent = jsonFormatado;
});
