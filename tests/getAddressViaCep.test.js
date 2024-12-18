getAddressViaCep;

import { getAddressViaCep } from "../helpers/index";

test("CEP: deve ter 8 dígitos. 'erro' deve ser false; caso true, request falhou ou cep inválido.", async () => {
  const cep = "14096680";
  const { erro } = await getAddressViaCep(cep);
  expect(erro).toBe(false);
});
