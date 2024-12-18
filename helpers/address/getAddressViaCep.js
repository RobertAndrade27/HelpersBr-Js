async function getAddressViaCep(value) {
  const cep = value?.replace(/[^0-9]/g, "");
  if (cep?.length !== 8) {
    return { erro: true };
  }
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      return { erro: true };
    }

    const data = await response.json();
    return { erro: false, ...data };
  } catch {
    return { erro: true };
  }
}

export default getAddressViaCep;
