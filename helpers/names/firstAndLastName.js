function firstAndLastName(name) {

  const nomeCompleto = name?.trim()
  
  const partesNome = nomeCompleto?.split(" ");

  if (partesNome?.length < 2) {
    return partesNome[0]
      ? partesNome[0].charAt(0).toUpperCase() +
          partesNome[0].slice(1).toLowerCase()
      : "";
  }

  const primeiroNome = partesNome &&
    partesNome[0].charAt(0).toUpperCase() +
    partesNome[0].slice(1).toLowerCase();
  const ultimoNome = partesNome && 
    partesNome[partesNome.length - 1].charAt(0).toUpperCase() +
    partesNome[partesNome.length - 1].slice(1).toLowerCase();

  const nomeFormatado = primeiroNome + " " + ultimoNome;

  return nomeFormatado;
}

export default firstAndLastName