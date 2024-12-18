function formatDateToIso(data) {
  const partes = data.split('/');
  const novaData = new Date(partes[2], partes[1] - 1, partes[0]);
  
  const ano = novaData.getFullYear();
  const mes = String(novaData.getMonth() + 1).padStart(2, '0');
  const dia = String(novaData.getDate()).padStart(2, '0');

  return `${ano}-${mes}-${dia}`;
}

export default formatDateToIso
