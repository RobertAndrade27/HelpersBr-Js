function formatZipCode(cep) {
  // Remove todos os caracteres não numéricos
  const numericCEP = cep.replace(/\D/g, '');

  // Formata o CEP
  const firstPart = numericCEP.substring(0, 2);
  const secondPart = numericCEP.substring(2, 5);
  const thirdPart = numericCEP.substring(5, 8);

  let formattedCEP = "";

  if (firstPart) {
    formattedCEP += firstPart;
    if (firstPart.length === 2 && secondPart) {
      formattedCEP += ".";
    }
  }
  if (secondPart) {
    formattedCEP += secondPart;
    if (secondPart.length === 3 && thirdPart) {
      formattedCEP += "-";
    }
  }
  if (thirdPart) {
    formattedCEP += thirdPart;
  }

  return formattedCEP;
}

export default formatZipCode;
