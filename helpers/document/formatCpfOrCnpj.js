function formatCpfOrCnpj(valor) {
  // Remove qualquer caractere que não seja dígito
  valor = valor.replace(/\D/g, '');

  // Verifica se é CPF ou CNPJ
  if (valor.length === 11) {
      // Formata CPF: 000.000.000-00
      return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else if (valor.length === 14) {
      // Formata CNPJ: 00.000.000/0000-00
      return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  } else {
      // Retorna valor original se não for CPF nem CNPJ
      return valor;
  }
}

export default formatCpfOrCnpj
