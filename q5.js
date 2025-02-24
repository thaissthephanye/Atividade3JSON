//Como você pode extrair dados armazenados em um objeto JSON?

//É possivel extrair dados do JSON utilizando chave.valor

const objetoq5 = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

console.log("dados extraidos do json através de chave.valor:");
console.log(objetoq5.nome); // Saída: João
console.log(objetoq5.idade); // Saída: 25
console.log(objetoq5.cidade); // Saída: São Paulo

//também é possível o acesso de dados através de []

// JSON object
const data = {
  name: "John",
  age: 22,
};

console.log(data["name"]); // John

function exibirParagrafo5() {
  // Remove a classe "hidden" do parágrafo para exibi-lo
  document.getElementById("paragrafo5").classList.remove("hidden");
}
