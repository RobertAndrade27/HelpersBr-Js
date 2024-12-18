import { formatFullName } from "../helpers/index"

test("O nome completo será formatado", () => {
  const nome = "ROBERT ANDRADE DE SOUZA";
  const resultado = formatFullName(nome);
  expect(resultado).toBe("Robert Andrade de Souza");
});
