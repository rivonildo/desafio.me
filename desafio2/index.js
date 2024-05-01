function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias: saldo, nivel: nivel };
}

// Exemplo de uso da função
let vitorias = 101;
let derrotas = 25;

let resultado = calcularNivel(vitorias, derrotas);
console.log(
  `O jogador tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`
);
