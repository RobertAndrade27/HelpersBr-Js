import { formatPhone }  from "../helpers/index"


test("Se receber parametro true será incluido o digito 9 após o DDD", () => {
  const celular = "1199999999";
  const validacao = celular.length === 10 ? true : false
  const resultado = formatPhone(celular, validacao);
  expect(resultado).toBe("(11) 9 9999-9999");
});
