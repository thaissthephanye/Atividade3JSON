//É possível criar chaves duplicadas num objeto JSON?
//É possível mas, a segundo atribuição ira sobrepôr a primeira
//o exemplo mostra o comportamento do json com chaves duplicadas

const objetoq6 = {
  nome: "João",
  nome: "Maria",
};

console.log(objetoq6.nome); // Saída: Maria

function exibirParagrafo6() {
  document.getElementById("paragrafo6").classList.remove("hidden");
}
