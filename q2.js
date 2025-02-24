//Quais são as operações mais comuns com JSON em Javascript

//1. JSON.stringify para converter json para string

const objeto = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

const jsonString = JSON.stringify(objeto);
console.log("Este é um JSON convertido para string:", jsonString);

//2. JSON.parse para converter uma string para json

const string = '{"nome":"João","idade":25,"cidade":"São Paulo"}';
const obetoJson = JSON.parse(jsonString);

console.log("Strings convertidas para objetos JSON:");
console.log(objeto.nome); // Saída: João
console.log(objeto.idade); // Saída: 25

//3. Também é possível acessar os valores do JSON utilizando chave.valor

const objetoAss = {
  nome: "Maria",
  idade: 30,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
  },
};
console.log("Acessando valores:");
console.log(objetoAss.nome); // Saída: Maria
console.log(objetoAss.endereco.rua); // Saída: Rua das Flores

function exibirParagrafo() {
  // Remove a classe "hidden" do parágrafo para exibi-lo
  document.getElementById("paragrafo").classList.remove("hidden");
}
