


import { formatZipCode }  from "../helpers/index"

test("cep deve formatar corretamente para o padrao 00.000-000", () => {
  const cep = "14092100";
  const resultado = formatZipCode(cep);
  expect(resultado).toBe("14.092-100");
});
