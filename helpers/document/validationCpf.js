function validationCpf(cpf) {
  cpf = cpf.replace(/[^\d]/g, ''); 

  if (cpf.length !== 11) return false;


  let soma = 0;
  let peso = 10;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * peso;
      peso--;
  }
  const resto1 = soma % 11;
  const digitoVerificador1 = (resto1 < 2) ? 0 : 11 - resto1;

  
  soma = 0;
  peso = 11;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * peso;
      peso--;
  }
  const resto2 = soma % 11;
  const digitoVerificador2 = (resto2 < 2) ? 0 : 11 - resto2;

  if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
  }

  return true;
}


export default validationCpf
