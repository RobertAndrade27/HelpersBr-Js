import removeSpecialChars from "./removeSpecialChars.js";

function toCurrency(value) {
  if (isNaN(value) || typeof value !== 'number') {
    return false; 
  }

  const reais = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value);

  return removeSpecialChars(reais, {ignore: "$,."});
}

export default toCurrency;


