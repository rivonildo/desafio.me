// Definição de variáveis
let nomeDoHeroi = "R.Azevedo";
let experiencia = 10000; // eperiençia
let nivel;

// Estrutura de decisão para determinar o nível baseado na experiência
if (experiencia < 1000) {
  nivel = "Ferro";
} else if (experiencia <= 2000) {
  nivel = "Bronze";
} else if (experiencia <= 5000) {
  nivel = "Prata";
} else if (experiencia <= 7000) {
  nivel = "Ouro";
} else if (experiencia <= 8000) {
  nivel = "Platina";
} else if (experiencia <= 9000) {
  nivel = "Ascendente";
} else if (experiencia <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// este Laço de repetição executarar a repetiçao 3 vezez
for (let i = 0; i < 3; i++) {
  console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`);
}
