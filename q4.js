//Como você define um array no JSON?

//Um array no JSON é definido por colchetes e os elementos são separados por vírgulas
//Um array pode conter valores de diferentes tipos, como strings, números, objetos, outros array, etc.

const ArrayJson = [
  {
    nome: "Thais",
    idade: 22,
    hobbies: ["jogar", "pintar", "descansar"],
    notas: [7.5, 8.0, 9.1],
    amigos: [
      { nome: "Fulano de tal", idade: 27 },
      { nome: "Sicrano de tal", idade: 29 },
    ],
  },
];

//dentro deste json exemplo contém arrays

document.getElementById("quest4").addEventListener("click", function () {
  const jsonFormatado = JSON.stringify(ArrayJson, null, 2);

  document.getElementById("resultado4").textContent = jsonFormatado;
});
